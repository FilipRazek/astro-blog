import { useState } from "preact/hooks";

export default function Greetings(props) {
  const { messages } = props;

  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(randomMessage());
  return (
    <div>
      <h3>{greeting}! Thanks for being here!</h3>
      <button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
    </div>
  );
}
