import { useState } from 'react';

function Counter1() {

    const [count, setCount] = useState(0);
    // let count = 0; // Plain variable, React doesn't track changes
    // console.log("useState:", useState(0));
  
    const increment = () => {
      setCount(count+1);
      //count += 1; // Increment the count

      console.log(count); // Logs the updated count to the console
      // But the UI won't update!
    };
  
    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    );
  }
  
  export default Counter1;