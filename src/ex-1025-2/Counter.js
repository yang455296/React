import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [total, setTotal] = useState(0);

  return (
    <>
      <h1>{total}</h1>
      {total !== 0 && <p>目前total={total}</p>}
      <button
        className="btn"
        onClick={() => {
          console.log(total);
          const newTotal = total + 1;
          setTotal(newTotal);
          // console.log(total); //非同步
          console.log(newTotal);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setTotal(total - 1);
        }}
      >
        -
      </button>
    </>
  );
}

export default Counter;
