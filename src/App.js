import React,{useState} from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const setIncrement = () => {
    setCounter(counter + 1);
  }
  const setReset = () => {
    setCounter(0);
  }
  const setDecrement = () => {
    setCounter(counter - 1);
    if (counter === 0) {
      setCounter(0);
    }
  }
  return (
    <>
    <div>
        <h1 className="text-center font-bold text-5xl m-10">{counter}</h1>
      </div>
      <div className="text-center space-x-4 m-10 xsm:space-y-3">
       <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded " onClick={setIncrement}>INCREMENT</button>
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={setReset}>RESET</button>
       <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded " onClick={setDecrement}>DECREMENT</button>
      </div>
    </>
  );
      
}

export default App;
