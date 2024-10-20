import * as React from "react"
import { everySecond } from "./interval"

var count = 0

async function requestNextState() {
  ++count
  // pretend that this is a fetch
  return Promise.resolve(count)
}

export function Counter() {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    return everySecond(requestNextState, setCount)
  })

  return (
    <div>
      <h2>Counter</h2>
      <div>{count}</div>
    </div>
  )
}