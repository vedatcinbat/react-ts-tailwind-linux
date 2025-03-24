import React, { useState } from 'react'

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div className="bg-sky-400 p-4 text-center">Welcome to React</div>
      <div>Counter: {count}</div>
      <button
        onClick={() => setCount(count + 1)}
        className="border bg-sky-300 p-4 rounded-lg mr-2">Increment</button>
      <button 
        onClick={() => setCount(count - 1)}
        className="border bg-sky-300 p-4 rounded-lg mr-2">Decrement</button>
    
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  )
}

export default App
