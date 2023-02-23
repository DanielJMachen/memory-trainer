import { useReducer } from 'react'
import Start from './components/Start'
import ShowLetters from './components/ShowLetters'
import Submisson from './components/Submission'
import Result from './components/Result'
import reducer from './utils/Reducer'
import InitialState from './utils/InitialState'
import RandomQuote from "./utils/RandomQuote"

function App() {
  const [{navState, gameState, resultState}, dispatch]= useReducer(reducer, {}, InitialState)
  const randomQuote = RandomQuote();

  return (
    <div className="flex h-screen">
      {navState.hasInitiated && <Start dispatch={dispatch} randomQuote={randomQuote}/>}
      {navState.hasStarted && <ShowLetters dispatch={dispatch} letterList={gameState.letterList}/>}
      {navState.hasCompleted && <Submisson dispatch={dispatch} gameState={gameState}/>}
      {navState.hasSubmitted && <Result dispatch={dispatch} result={resultState.result}/>}
    </div>
  )
}

export default App
