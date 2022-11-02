import { useEffect, useState } from 'react';

function ChildB(props) {
  const [childBData, setChildBData] = useState('childB data123');

  useEffect(() => {
    props.setDataFromChildB(childBData);
  }, [childBData]);

  return (
    <>
      <h1>ChildB</h1>
      <p>{childBData}</p>
      <button
        onClick={() => {
          setChildBData('abc');
          // props.setDataFromChildB(childBData);
        }}
      >
        abc
        {/* 送資料到Parent */}
      </button>
      <button
        onClick={() => {
          setChildBData('123');
          // props.setDataFromChildB(childBData);
        }}
      >
        123
        {/* 送資料到Parent */}
      </button>
    </>
  );
}

export default ChildB;
