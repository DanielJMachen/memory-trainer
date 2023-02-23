export default function GenerateResult(letterList, submission, startTime, endTime) {
        const resultByLetter = []
        let correctCount = 0;
        const letterListLegnth = letterList.length
        const submissionLegnth = submission.length

        for (let i=0; i < letterListLegnth; i++) {

            if (i > submissionLegnth || letterList[i] !== submission[i]) {
                resultByLetter.push({letter: letterList[i], result: 'incorrect'})
            } else {
                resultByLetter.push({letter: letterList[i], result: 'correct'})
                correctCount++;
                }
            }

        const correctPerc = Math.floor((correctCount/letterListLegnth) * 100)

        const completeTimeMinutes = Math.floor((endTime - startTime) / 1000 / 60);
        const completeTimeSeconds = Math.floor(((endTime - startTime) / 1000) % 60);

        const completeTime = `${completeTimeMinutes}  Minutes ${completeTimeSeconds} Seconds`

        return {resultByLetter, correctPerc, completeTime}
        }