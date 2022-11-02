import { useState } from 'react';
import './BMI.css';
function BMI() {
  const [inputHeight, setInputHeight] = useState(0);
  const [inputWeight, setInputWeight] = useState(0);
  const [BMI, setBMI] = useState(0);
  const [text, setText] = useState('');

  return (
    <>
      <h3>身高(cm)</h3>
      <input
        type="number"
        value={inputHeight === 0 ? '' : inputHeight}
        //input欄內預設值調整
        placeholder="請輸入身高(cm)"
        onChange={(e) => {
          setInputHeight(Number(e.target.value));
          //保持state的資料類型一致
          setBMI(0);
          setText('');
        }}
      />
      <h3>體重(kg)</h3>
      <input
        type="number"
        value={inputWeight === 0 ? '' : inputWeight}
        placeholder="請輸入體重(kg)"
        onChange={(e) => {
          setInputWeight(Number(e.target.value));
          setBMI(0);
          setText('');
        }}
      />
      <button
        onClick={(e) => {
          if (inputHeight < 100 || inputWeight < 10) {
            alert('輸入身高體重有誤，請重新輸入');
            return;
          }
          const newBMI =
            Math.round((inputWeight / Math.pow(inputHeight / 100, 2)) * 10) /
            10;
          setBMI(newBMI);
          if (newBMI < 18.5) {
            setText('過輕');
          } else if (newBMI < 24) {
            setText('正常');
          } else if (newBMI < 27) {
            setText('過重');
          } else if (newBMI < 30) {
            setText('輕度肥胖');
          } else if (newBMI < 35) {
            setText('中度肥胖');
          } else {
            setText('重度肥胖');
          }
        }}
      >
        開始計算
      </button>
      <hr />
      <div className={BMI === 0 ? 'hidden' : ''}>BMI值為:{BMI}</div>
      {/* BMI值為:{BMI.tofixed(1)} 一樣是四捨五入 */}
      <div>{text}</div>
    </>
  );
}

export default BMI;
