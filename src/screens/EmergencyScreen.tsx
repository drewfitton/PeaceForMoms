import React from "react";
import { Layout } from "../components/Layout";
import { Text, VStack, Heading, Box, Divider } from "native-base";

export const EmergencyScreen = () => {
  /***************		JSX		***************/

  return (
    <Layout>
      <VStack space={5} alignItems="center">
        <Heading textAlign="center" size="xl">Emergency Contacts</Heading>
        <Box
          p="3.5"
          bg="yellow.100"
          alignItems="center"
          borderRadius={30}
          width="90%"
        >
          <Text textAlign="center" variant="blurb">
            PEACE for Moms is not a crisis line. If your patient is in an
            emergency, please contact one of these organizations that provide
            free, confidential support 24/7.
          </Text>
        </Box>
        <Box alignItems="center" p="7" bg="primary.400" borderRadius={30}>
          <Text bold variant="contrastSubHeading">
            Georgia Crisis and Access Line (GCAL)
          </Text>
          <Text variant="contrastBody">Call 1-800-715-4225 or download </Text>
          <Text variant="contrastBody"> MyGCAL app to text or chat</Text>
          <Divider my="3" />
          <Text bold variant="contrastSubHeading">
            National Suicide Prevention Lifeline
          </Text>
          <Text variant="contrastBody">
            Call 1-800-273-8255 or visit www.suicidepreventionlifeline.org
          </Text>
          <Divider my="3" />
          <Text bold variant="contrastSubHeading">
            National Crisis Text Line
          </Text>
          <Text variant="contrastBody">Text HOME to 741741</Text>
        </Box>
      </VStack>
    </Layout>
  );
};
