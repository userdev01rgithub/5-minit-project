import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import RequestForServer from './API/RequestForServer';
import Test from './comonents/test';

function App() {

  /*
  useEffect(() => {

    const ses = async () => {
      const response = await RequestForServer.getUser()

    }
    
    ses()

  }, []);*/

  const [count, setCount] = useState(0)

  const cou2nt = () => {
    setCount( count + 1)
  }
  const cou1nt = () => {
    setCount( count - 1)
  }

  useEffect(() => {
    console.log("Изменено состояние count" + count)
  }, [count])

  return (
    <div className="App">
      <h1>Привет</h1>
      <Test>{count}</Test>
      <button onClick={e=> cou2nt()}>+</button>
      <button onClick={e=> cou1nt()}>-</button>
    </div>
  );
}

export default App;
