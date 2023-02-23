

export default function Result({dispatch, result}) {

    const rows = [];
    const resultByLetter = result.resultByLetter
    const correctPerc = result.correctPerc
    const completeTime = result.completeTime

    for (let i = 0; i < resultByLetter.length; i++) {
        if (resultByLetter[i].result === 'correct') {
            rows.push(<span key={i} className="text-green-500">{resultByLetter[i].letter}</span>)
        } else {
            rows.push(<span key={i} className="text-red-500">{resultByLetter[i].letter}</span>)   
        }

    }
    
    function handleClick() {
        dispatch({type: 'restart'})
    }

    return (
         <div className="m-auto text-center space-y-10 > * + *">
            <h1 className="font-bold">{rows}</h1>
            <h1>{correctPerc}%</h1>
            <p>{completeTime}</p>
            <button onClick={handleClick}>restart</button>
        </div>
    )
}