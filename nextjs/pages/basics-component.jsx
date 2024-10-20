import * as React from "react"

async function makeConfigRequest() {
  return fetch(
    "http://localhost:3000/nextjs/fake-config.json", {
      method: "GET",
      headers: {
        "my-header": "my header value"
      }
    }
  )
}

async function fakePostRequest() {
  return fetch(
    "http://localhost:3000/nextjs/fake-config.json", {
      method: "POST",
      body: JSON.stringify({key: "value"}),
    }
  )
}


export default function BasicsComponent() {
  const [count, setCount] = React.useState(0)
  const [message, setMessage] = React.useState()
  const [config, setConfig] = React.useState()

  async function updateConfig() {
    const c = await (await makeConfigRequest()).json()
    setConfig(c.key)
  }

  function updateCount() {
    setCount(count + 1)
  }

  function onReceiveMessage(event) {
    const data = JSON.parse(event.data)
    if (data.target === 'parent') {
      return
    }
    setMessage(event.data)
  }

  function postMessage() {
    window.postMessage("some message")
  }

  React.useEffect(() => {
    window.addEventListener("message", onReceiveMessage)

    return () => {
      window.removeEventListener("message", onReceiveMessage)
    }
  })

  const valueFromDotenvFile = process.env.NEXT_PUBLIC_ENV_LOCAL_VARIABLE

  return (
    <div>
      <style jsx>{`
        .my-thing {
          color: red;
        }
      `}</style>

      <h2>Basic functionality</h2>

      <h3>Button to update count</h3>
      <div>
        <button onClick={updateCount}>Update Count</button>
        <span>Count: {count}</span>
      </div>

      <h3>Post a message (can be received by parent window)</h3>
      <div>
        <button onClick={postMessage}>Post message</button>
        <span>Message: {message}</span>
      </div>

      <h3>Print an environment variable</h3>
      <div>
        Environment variable: {valueFromDotenvFile}
      </div>

      <h3>Make a GET REST request</h3>
      <div>
        <button onClick={updateConfig}>Get configuration</button>
        <span>Configuration from endpoint: {config}</span>
      </div>
      <h3>Make a POST REST request (look at browser dev console)</h3>
      <div>
        <button onClick={fakePostRequest}>Fake POST request with body</button>
      </div>
    </div>
  )
}
