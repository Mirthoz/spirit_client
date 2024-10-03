import { useState } from 'react'
import spiritLogo from './assets/spirit_logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={spiritLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Spirit</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
