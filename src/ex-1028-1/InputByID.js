import React from 'react';

function InputByID() {
  return (
    <>
      <h1>不可控表單元件</h1>
      <input type="text" id="email" />
      <button
        onClick={() => {
          document.getElementById('email').value = 'test@gmail.com';
        }}
      >
        載入資料
      </button>
      <hr />
    </>
  );
}

export default InputByID;
