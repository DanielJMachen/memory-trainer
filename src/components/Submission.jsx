import { useRef } from "react"
import GenerateResult from "../utils/GenerateResult"

export default function Submission({dispatch, gameState}) {
    const submissionRef = useRef()

    function handleClick() {
        const submission = submissionRef.current.value.toUpperCase().split('')
        const letterList = gameState.letterList
        const startTime = gameState.startTime
        const endTime = new Date().getTime();
        let result = GenerateResult(letterList, submission, startTime, endTime)
        dispatch({type: 'submit', payload: {result}})
    }

    return (
        <div className="m-auto text-center space-y-5 > * + * w-2/5">
            <input type="text" placeholder={"Type the letters from memory"} ref={submissionRef} 
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm text-center tracking-wider"/><br></br>
            <button onClick={handleClick}>submit</button>
        </div>
    )
}