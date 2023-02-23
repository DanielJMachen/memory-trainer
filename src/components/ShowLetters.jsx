import { useState } from "react";

export default function ShowLetters({dispatch, letterList}) {
    const [letterNumber, setLetterNumber] = useState(0);

    function handleClick() {
        setLetterNumber(letterNumber => letterNumber + 1)
        if (letterNumber == letterList.length - 1) {
            dispatch({type: 'complete'})
        }
    }

    return (
        <div className="m-auto text-center space-y-10 > * + *">
            <div className="text-6xl">{letterList[letterNumber]}</div>
            <button onClick={handleClick}>next</button>
        </div>
    )
}