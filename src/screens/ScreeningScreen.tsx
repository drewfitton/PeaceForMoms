import React, { useState} from "react";
import { Layout } from "../components/Layout";
import { Text, VStack, HStack, Button, Card, Heading } from "native-base";
import { database } from "../firebase/config";
import { get, ref } from "firebase/database";
import { useNavigation } from "@react-navigation/native";
import { BipolarCalc } from "../calc/BipolarCalc";
import { BirthTraumaCalc } from "../calc/BirthTraumaCalc";
import { PerinatalAnxietyCalc } from "../calc/PerinatalAnxietyCalc";
import { GadCalc } from "../calc/GadCalc";
import { DepressionCalc } from "../calc/DepressionCalc";
import { ProgressBar } from "../components/ProgressBar";

export type ScreeningScreenProps = {
  screeningType: String;
};

export type Question = {
  answers: String[];
  precept: String;
  remaining: String[];
};

export const ScreeningScreen = ({ route }) => {
  /***************		HOOKS		***************/

  const { screeningType } = route.params;
  const questionsReference = ref(
    database,
    `screening_tools/${screeningType}/questions`
  );
  // const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [points, setPoints] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answerArray, setAnswerArray] = useState([]);

  const { navigate, goBack } = useNavigation();
  const navigation = useNavigation();

  /***************		FUNCTIONS		***************/

  const handleBack = () => {
    if (questionNumber === 0) {
      goBack();
    } else {
      setQuestionNumber(questionNumber - 1);
    }
  };

  const handleNext = () => {
    if (answerArray.length > questionNumber) {
      if (questionNumber + 1 < (questions ? questions.length : 0)) {
        setQuestionNumber(questionNumber + 1);
      } else {
        navigate(
          "Results" as never,
          {
            result: calculate(answerArray),
          } as never
        );
      }
    }
  };

  const handleAnswer = (index) => {
    const newAnswerArray = [
      ...answerArray.slice(0, questionNumber),
      index,
      ...answerArray.slice(questionNumber + 1),
    ];
    setAnswerArray(newAnswerArray);
  };

  const calculate = (answerArray) => {
    switch (screeningType) {
      case "bipolar":
        return BipolarCalc(answerArray);
      case "depression":
        return DepressionCalc(answerArray);
      case "birth_trauma":
        return BirthTraumaCalc(answerArray);
      case "GAD_anxiety":
        return GadCalc(answerArray);
      case "perinatal_anxiety":
        return PerinatalAnxietyCalc(answerArray);
      default:
        return BipolarCalc(answerArray);
    }
  };

  /***************		EFFECTS		***************/

  if (questions.length === 0) {
    get(questionsReference).then((snapshot) => {
      if (snapshot.exists()) {
        setQuestions(snapshot.val());
      }
    });
  }

  /***************		JSX		***************/

  return (
    <Layout>
      <VStack
        space={5}
        flex={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading size="xl" pt={3}>Screening</Heading>
        <ProgressBar
          color="primary.500"
          backgroundColor="gray.300"
          progress={
            questions.length > 0 ? questionNumber / questions.length : 0
          }
        />
        
        <VStack flex={1} alignItems="center" space={5}>
          <Card bg="yellow.100" alignItems="center" borderRadius={30}>
            <Text textAlign="center" variant="blurb">
              Please check the answer that is right for you:
            </Text>
          </Card>
          <Card
            alignSelf="stretch"
            alignItems="center"
            bg="primary.400"
            borderRadius={30}
          >
            <Text bold variant="contrastSubHeading">
              {questions.length > 0
                ? questions[questionNumber].question_number +
                  ". " +
                  questions[questionNumber].question
                : ""}
            </Text>
            {questions.length > 0 ? (
              questions[questionNumber].answers.map(
                (answer: String, index: number) => (
                  <Button
                    borderColor="white"
                    borderWidth="2"
                    key={index}
                    isPressed={answerArray[questionNumber] === index}
                    onPress={() => {
                      handleAnswer(index);
                    }}
                    alignSelf="stretch"
                    marginY={3}
                  >
                    <Text textAlign="center" color="white">
                      {answer}
                    </Text>
                  </Button>
                )
              )
            ) : (
              <Button
                textAlign="center"
                borderColor="white"
                borderWidth="2"
                marginTop={5}
                height="55"
                width="180"
              />
            )}
          </Card>
        </VStack>
        <HStack space={5} justifyContent="space-around">
          <Button
            flex={1}
            paddingY={3}
            onPress={handleBack}
            isDisabled={questionNumber === 0}
          >
            Back
          </Button>

          {questionNumber + 1 < (questions ? questions.length : 0) ? (
            <Button flex={1} onPress={handleNext}>
              Next
            </Button>
          ) : (
            <Button flex={1} onPress={handleNext}>
              Done
            </Button>
          )}
        </HStack>
      </VStack>
    </Layout>
  );
};
