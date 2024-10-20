import { Counter } from './counter-component';
import PostMessageToParent from './post-message-to-parent-component';
import { PassInFunction } from './pass-in-function-component';
import BasicsComponent from './basics-component'
import MessageFromParent from './message-from-parent-component';

export default function Home() {
  return (
    <div>
      <BasicsComponent></BasicsComponent>
      <MessageFromParent></MessageFromParent>
      <PostMessageToParent></PostMessageToParent>
      <Counter></Counter>
      <PassInFunction></PassInFunction>
    </div>
  )
}
