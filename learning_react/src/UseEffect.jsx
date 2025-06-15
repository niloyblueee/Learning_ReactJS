// File: UseEffectExample.jsx

import React, { useState, useEffect } from 'react';

function UseEffectExample() {
  // useState is used to store the counter value
  const [count, setCount] = useState(0);

  // useEffect runs side effects in function components.
  // This effect runs after every render because no dependency array is provided.
  useEffect(() => {
    console.log('Component rendered or updated.');

    // Optional: return a cleanup function
    return () => {
      console.log('Cleanup before the next useEffect or before component unmounts.');
    };
  });

  // useEffect with dependency array: runs only when `count` changes
  useEffect(() => {
    console.log(`Count changed to ${count}`);

    // Simulate a side effect like fetching data or updating document title
    document.title = `Count: ${count}`;
  }, [count]); // This effect depends on `count`

  // useEffect with empty dependency array: runs only once (on mount)
  useEffect(() => {
    console.log('Component mounted (runs only once)');
  }, []); // Empty dependency array

  return (
    <div style={{ padding: '20px' }}>
      <h2>useEffect Hook Example</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>
    </div>
  );
}

export default UseEffectExample;
