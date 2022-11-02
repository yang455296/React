import React, { useState } from 'react';

import InputByID from './InputByID';
import InputByRefs from './InputByRefs';
function InputDemo() {
  const [inputText, setInputText] = useState('');

  return (
    <>
      <h1>可控表單元件</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setInputText('test@gmail.com');
        }}
      >
        載入資料
      </button>
      <hr />

      <InputByID />
      <InputByID />
      <InputByRefs />
      <InputByRefs />
      {/* <h1>不可控表單元件</h1>
      <input type="text" id="email" />
      <button
        onClick={() => {
          document.getElementById('email').value = 'test@gmail.com';
        }}
      >
        載入資料
      </button>
      <hr />

      <h1>不可控表單元件(可重複利用)</h1>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.value = 'test@gmail.com';
        }}
      >
        載入資料
      </button> */}
    </>
  );
}

export default InputDemo;
