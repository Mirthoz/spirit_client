import { useState, useEffect, useRef } from 'react';
import spiritLogo from './assets/spirit_logo.svg';
import './App.css';
import { testBE } from "./services/SpiritAPIService.ts";

function App() {
  const [count, setCount] = useState(0);
  const hasFetched = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      if (count > 10 && !hasFetched.current) {
        hasFetched.current = true;
        await testBE(Math.floor(Math.random() * (1000000000 - 1000000 + 1)) + 1000000);
        setCount(0);
      } else if (count <= 10) {
        hasFetched.current = false;
      }
    };

    fetchData();
  }, [count]);

  return (
      <>
        <div>
          <img src={spiritLogo} className="logo react" alt="React logo" />
        </div>
        <h1>Spirit</h1>
        <div className="card">
          <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            count is {count}
          </button>
        </div>
      </>
  );
}

export default App;