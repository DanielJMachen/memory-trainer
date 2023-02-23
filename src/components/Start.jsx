import { useState } from "react";
import GenerateLetters from "../utils/GenerateLetters";

export default function StartScreen({dispatch, randomQuote}) {
    const [difficulty, setDifficulty] = useState(15);
    

    function handleClick() {
        let letterList = GenerateLetters(difficulty)
        let startTime = new Date().getTime();
        dispatch({type: 'start', payload: {letterList, startTime}});
    }

    function handleChange(e) {
        setDifficulty(e.target.value)
    }

    return (
        <div className="m-auto text-center space-y-10 > * + *">
            <h1>Memory Trainer</h1>
            <div className="w-1/2 m-auto">
                <ul>
                <li className="m-auto italic text-xs font-serif font-light">{randomQuote.quote}</li>
                <li className="text-xs">-{randomQuote.author}</li>
                </ul>

            </div>
            <div >
                <input type="range" min="1" max="30" defaultValue={difficulty} onChange={handleChange}
                className ="transparent h-1.5 w-1/2 cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200 accent-gray-600 mb-3"/>
                <p>Difficulty: <span className="font-medium">{difficulty}</span></p>
            </div>
            <button onClick={handleClick}>start</button>
        </div>
    )
}