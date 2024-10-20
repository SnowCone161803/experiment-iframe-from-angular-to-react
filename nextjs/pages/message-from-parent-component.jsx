import { everySecond } from "./interval";
import * as react from "react"

let postMessageId = 0;

async function postMessageToParent() {
    window.postMessage(JSON.stringify({
      summary: "message from child",
      someId: "id-from-child-1234",
      target: "parent",
      count: postMessageId,
    }))
    ++postMessageId
    return postMessageId
}

export function MessageFromParent() {

  const [message, setMessage] = react.useState()

  function onReceiveMessage(event) {
    const data = JSON.parse(event.data)
    if (data.target !== 'child') {
      return
    }
    setMessage(event.data)
  }

  function postMessage() {
    window.postMessage("some message")
  }

  react.useEffect(() => {
    window.addEventListener("message", onReceiveMessage)

    return () => {
      window.removeEventListener("message", onReceiveMessage)
    }
  })

  return (
    <div>
      <h2>Message from parent window</h2>
      <div>Message: {message}</div>
    </div>
  )
}