const name = "Postnatal Depression Screening Results";
const positiveResultMessage = "Mothers scoring above 12 or 13 are likely to be suffering from depression and should seek medical attention.";
const negativeResultMessage= "Your patient scored below the threshold for the scale of measuring postnatal depression. Remember, this is a screening test; not a medical diagnosis. If something doesn’t seem right, call your health care provider regardless of your score.";

export const DepressionCalc = (answers: number[]) => {
    let sum = 0;
    for (let i = 0; i < answers.length; i++) {
        sum += answers[i];
    }; 
    if (sum >= 12) {
        return [name, sum, positiveResultMessage, 'https://www.peace4momsga.org/wp-content/uploads/2022/04/SCORING-EPDS.pdf', 'https://www.peace4momsga.org/wp-content/uploads/2022/04/Depression-Screening-and-Treatment-for-Clinicians.pdf'];
    } else {
        return [name, sum, negativeResultMessage, 'https://www.peace4momsga.org/wp-content/uploads/2022/04/SCORING-EPDS.pdf', 'https://www.peace4momsga.org/wp-content/uploads/2022/04/Depression-Screening-and-Treatment-for-Clinicians.pdf'];
    }
};