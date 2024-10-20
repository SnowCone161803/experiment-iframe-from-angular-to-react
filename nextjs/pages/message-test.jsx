import PostMessageToParent from "./post-message-to-parent-component"
import MessageFromParent from "./message-from-parent-component"

export default function SendReceiveMessage() {
  return (
    <div>
      <PostMessageToParent></PostMessageToParent>
      <MessageFromParent></MessageFromParent>
    </div>
  )
}