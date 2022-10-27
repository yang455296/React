import { useState } from 'react';
import { examples } from './examples';

function App() {
  const [displayIndex, setDisplayIndex] = useState(0);

  const selection = (
    <select
      value={displayIndex}
      onChange={(e) => {
        setDisplayIndex(Number(e.target.value));
      }}
      // 注意資料類型
    >
      {examples.map((v, i) => {
        return (
          <option key={i} value={i}>
            {v.name}
          </option>
        );
      })}
    </select>
  );

  // 動態元件語法，注意命名開頭英文一定要大寫
  const MyComponent = examples[displayIndex].component;
  return (
    <>
      {selection}
      <hr />
      <MyComponent />
    </>
  );
}

export default App;
