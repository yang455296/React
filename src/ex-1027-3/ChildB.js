import { useState } from 'react';

function ChildB(props) {
  const [childBData, setChildBData] = useState('childB data123');
  return (
    <>
      <h1>ChildB</h1>
      <p>{childBData}</p>
      <button
        onClick={() => {
          props.setDataFromChildB(childBData);
        }}
      >
        送資料到Parent
      </button>
    </>
  );
}

export default ChildB;
