
import { useEffect } from 'react';
import './App.css';
import { useRef } from 'react';
import { useState } from 'react';
// import { clear } from '@testing-library/user-event/dist/clear';

function App() {
  const inputRef = useRef(null)
  // useEffect(() => {
  //   inputRef.current.focus()
  // }
  //   , [])
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef(null)
  useEffect(() => {
    intervalRef.current =
    setInterval(() => { setTimer((x) => x + 1) }, 1000)
    return () => { clearInterval(intervalRef.current) }


  }, [])
  return (
    <div className="App">
      <input ref={inputRef} type="text" />
      <div>Timer -{timer}</div>
      <button onClick={() => clearInterval(intervalRef.current)} > Clear Timer</button>
    </div>
  );
}

export default App;
