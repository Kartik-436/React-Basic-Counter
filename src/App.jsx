/* eslint-disable no-unused-vars */
import React, { useState } from "react"

const App = () => {
  const [count, setcount] = useState(0);

  return (
    <div id="main">
      <div id="header">
        <h1>Basic Counter Using React</h1>
        <p>This is a simple Counter created using React.</p>
      </div>

      <div id="counter" >
        <h2>Current Count: {count}</h2>

        <div id="C2">
          <button onClick={() => {
            setcount(count + 1)
          }}>Increment</button>

          <button onClick={() => {
            setcount(count - 1)
          }}>Decrement</button>

          <button onClick={() => {
            setcount(0)
          }}>Reset</button>

        </div>
      </div>
    </div>
  )
}

export default App