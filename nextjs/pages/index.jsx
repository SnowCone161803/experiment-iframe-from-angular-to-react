import OldTemplate from './old-template';
import SimplerComponent from './simpler-test-component';
import { Counter } from './counter-component';
import { PostMessageToParent } from './post-message-to-parent-component';
import { PassInFunction } from './pass-in-function-component';

export default function Home() {
  return (
    <div>
      <SimplerComponent></SimplerComponent>
      <Counter></Counter>
      <PostMessageToParent></PostMessageToParent>
      <PassInFunction></PassInFunction>
    </div>
)
}
