import React, { useState } from 'react';

const App = () => {
  const [range, setRange] = useState(""); 
  const [numArray, setNumArray] = useState([]);
  const [index,setIndex] = useState("");

  const generateArray = () => {
    const newArray = [];
    for (let i = 0; i < range; i++) {
      newArray.push(Math.floor(Math.random() * 450) + 1);
    }
    setNumArray(newArray); 
  };

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  
  const sort = async () => {
    const sortedArray = [...numArray]; 
    const len = sortedArray.length;

    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (sortedArray[j] < sortedArray[j + 1]) {
          const temp = sortedArray[j];
          sortedArray[j] = sortedArray[j + 1];
          sortedArray[j + 1] = temp;
          setIndex(sortedArray[j+1]);
          setNumArray([...sortedArray]);

          await delay(.001);
        }
      }
    }
  };

  const handleRangeChange = (e) => {
    const value = e.target.value;
    if (value === "" || !isNaN(value)) {
      setRange(Number(value));
    }
    generateArray();
  };

  return (
    <div className="flex flex-col justify-normal items-center">
      <h1 className="w-[100vw] h-14 text-5xl text-center bg-black text-white">
        Bubble Sort
      </h1>
      <div className="flex flex-col items-center justify-center my-4">
        <span className="text-3xl mb-2">Range</span>
        <input
          className="w-80 h-14 rounded-lg border-[4px] border-black px-2 text-xl"
          type="number"
          value={range}
          onChange={handleRangeChange} 
        />
        <div className="flex gap-3">
          <button
            onClick={generateArray}
            className="bg-black rounded-md text-white my-4 h-12 w-44 text-2xl"
          >
            Generate
          </button>
          <button
            onClick={sort}
            className="bg-red-900 rounded-md text-white my-4 h-12 w-44 text-2xl"
          >
            Sort
          </button>
        </div>
        <div className="my-6 flex gap-[2px] items-end">
          {numArray.map((e, i) => (
            
            index!=e?
            <div
              key={i} 
              className="bg-gray-600  w-1"
              style={{ height: `${e}px`}}
            >{console.log(index)
            }</div>
            :
            <div
              key={i} 
              className={`w-2 bg-red-800`}
              style={{ height: `${e}px`}}
            >{console.log(index)
            }</div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
