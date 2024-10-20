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

export default function PostMessageToParent() {

  const [messageId, setMessageId] = react.useState()

  function doPost() {
    postMessageToParent().then(setMessageId)
  }

  return (
    <div>
      <h2>Post message to parent</h2>
      <button onClick={doPost}>post to parent</button>
      <div>Message ID = {messageId}</div>
    </div>
  )
}