const name = "Bipolar Screeening Results"
const positiveResultMessage = "You have a positive screen. A positive screen should be followed by a comprehensive medical evaluation for Bipolar Spectrum Disorder."
const negativeResultMessage = "You have a negative screen."
export const BipolarCalc = (answers: number[]) => {
  let sum = 0;
  for (let i = 0; i <= 12; i++) {
    sum += answers[i];
  }
  if (sum >= 7 && answers[13] === 1 && answers[14] >= 2) {
    return [name, sum, positiveResultMessage, 'https://www.peace4momsga.org/wp-content/uploads/2022/04/SCORING-MDQ.pdf', 'https://www.peace4momsga.org/for-professionals/professionals-bipolar-disorder/'];
  } else {
    return [name, sum, negativeResultMessage, 'https://www.peace4momsga.org/wp-content/uploads/2022/04/SCORING-MDQ.pdf', 'https://www.peace4momsga.org/for-professionals/professionals-bipolar-disorder/'];
  }
};
