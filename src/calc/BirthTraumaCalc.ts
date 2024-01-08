export function BirthTraumaCalc(answers: number[]) {
  const results = diagnosticCriteria(answers);
  return ["Birth Trauma", "N/A", results.join(" "), 'https://www.peace4momsga.org/wp-content/uploads/2022/04/SCORING-City-Birth-Trauma-Scale.pdf', 'https://www.peace4momsga.org/for-professionals/professionals-ptsd/'];
}

function evaluateStressorCriterion(answers: number[]) {
  return answers[0] == 1 || answers[1] == 1;
}
function scoreReExperiencingSymptoms(answers: number[]) {
  const firstIndex = 2;
  const lastIndex = 6;
  let sum = 0;
  for (let i = firstIndex; i <= lastIndex; i++) {
    sum += answers[i];
  }
  return sum;
}

function evaluateReExperiencingSymptoms(answers: number[]) {
  return scoreReExperiencingSymptoms(answers) >= 1;
}

function scoreAvoidanceSymptoms(answers: number[]) {
  const firstIndex = 7;
  const lastIndex = 8;
  let sum = 0;
  for (let i = firstIndex; i <= lastIndex; i++) {
    sum += answers[i];
  }
  return sum;
}
function evaluateAvoidanceSymptoms(answers: number[]) {
  return scoreAvoidanceSymptoms(answers) >= 1;
}

function evaluateNegativeConditionsAndMood(answers: number[]) {
  const firstIndex = 9;
  const lastIndex = 15;
  let count = 0;
  for (let i = firstIndex; i <= lastIndex; i++) {
    if (answers[i] > 0) {
      count++;
    }
  }
  return count >= 2;
}

function evaluateHyperarousal(answers: number[]) {
  const firstIndex = 16;
  const lastIndex = 21;
  let count = 0;
  for (let i = firstIndex; i <= lastIndex; i++) {
    if (answers[i] > 0) {
      count++;
    }
  }
  return count >= 2;
}

function scoreDissociativeSymptoms(answers: number[]) {
  const firstIndex = 22;
  const lastIndex = 23;
  let sum = 0;
  for (let i = firstIndex; i <= lastIndex; i++) {
    sum += answers[i];
  }
  return sum;
}
function evaluatePtsdWithDissociativeSymptoms(answers: number[]) {
  return scoreDissociativeSymptoms(answers) >= 1;
}
function evaluateDuration(answers: number[]) {
  return answers[25] >= 1;
}
function evaluateDistressAndImpairment(answers: number[]) {
  const sum = answers[26] + answers[27];
  return sum >= 1;
}
function evaluateExclusionCriteria(answers: number[]) {
  return answers[28] >= 1;
}
function evaluatePtsdWithDelayedOnset(answers: number[]) {
  return answers[24] === 2;
}
function evaluatePtsdWithNewIncidence(answers: number[]) {
  return answers[24] === 0;
}

function diagnosticCriteria(answers: number[]) {
  const results: string[] = [];
  if (evaluateStressorCriterion(answers)) {
    results.push("The patient is in stressor criterion.");
  }
  if (evaluateReExperiencingSymptoms(answers)) {
    results.push("The patient shows the re-experiencing symptoms.");
  }
  if (evaluateAvoidanceSymptoms(answers)) {
    results.push("The patient shows the avoidance symptoms.");
  }
  if (evaluateNegativeConditionsAndMood(answers)) {
    results.push("The patient has negative conditions and mood.");
  }
  if (evaluateHyperarousal(answers)) {
    results.push("The patient is in state of hyperarousal.");
  }
  if (evaluateDuration(answers)) {
    results.push("The patient is in duration.");
  }
  if (evaluateDistressAndImpairment(answers)) {
    results.push("The patient shows symptoms of distress and impairment.");
  }
  if (evaluateExclusionCriteria(answers)) {
    results.push("Exclude the patient from diagnostic PTSD.");
  }
  if (evaluatePtsdWithDissociativeSymptoms(answers)) {
    results.push("The patient has PTSD with dissociative symptoms.");
  }
  if (evaluatePtsdWithDelayedOnset(answers)) {
    results.push("The patient has PTSD with delayed onset.");
  }
  if (evaluatePtsdWithNewIncidence(answers)) {
    results.push(
      "PTSD prior to birth so is a measure of prevalence rather than new incidence of PTSD due to birth."
    );
  }

  return results;
}
