import { useState } from 'react'

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const handleClick = (value, setValue) => () => setValue(value +1)

  return (
    <div>
      <h1>Give feedback</h1>

      <button onClick={handleClick(good, setGood)}>Good</button>
      <button onClick={handleClick(neutral, setNeutral)}>Neutral</button>
      <button onClick={handleClick(bad, setBad)}>Bad</button>

      <h1>Statistics</h1>

      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  );
}

export default App;
