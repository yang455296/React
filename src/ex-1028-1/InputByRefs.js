import React, { useRef } from 'react';

function InputByRefs() {
  //{ current: null }
  const inputRef = useRef(null);

  return (
    <>
      <h1>不可控表單元件(可重複利用)</h1>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.value = 'test@gmail.com';
        }}
      >
        載入資料
      </button>
    </>
  );
}

export default InputByRefs;
