import * as react from "react"
import { everySecond } from "./interval"

let counter = 10000

function firstFunction() {
  return "this is from the FIRST function: " + counter
}

function secondFunction() {
  return "this is from the SECOND function: " + counter
}

function incrementCounter() {
  ++counter
}

export function PassInFunction() {
  const [currentFunction, setCurrentFunction] = react.useState(firstFunction)

  react.useEffect(() => everySecond(incrementCounter))

  return (
    <div>
      <h2>Change function implementation</h2>
      <div>
        <button onClick={() => setCurrentFunction(firstFunction)}>update from firstFunction</button>
      </div>
      <div>
        <button onClick={() => setCurrentFunction(secondFunction)}>update from secondFunction</button>
      </div>
      {/* NOTE: this is being called once */}
      <div>Current function result: {currentFunction}</div>
    </div>
  )
}