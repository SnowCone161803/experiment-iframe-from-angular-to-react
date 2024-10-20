import PostMessageToParent from "./post-message-to-parent-component"
import MessageFromParent from "./message-from-parent-component"

export default function SendReceiveMessage() {
  return (
    <div className="test-stuff">
      <style jsx>{`
        .test-stuff {
          background-color: #eee;
          height: 100vh;
        }
      `}</style>
      <PostMessageToParent></PostMessageToParent>
      <MessageFromParent></MessageFromParent>
    </div>
  )
}