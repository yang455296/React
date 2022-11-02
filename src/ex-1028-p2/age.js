import { useState } from 'react';
import './age.css';

function Age() {
  // BY 老師
  const makeOptions = (min, max) => {
    const options = [];
    for (let i = min; i <= max; i++) {
      options.push(i);
    }
    return options;
  };
  // BY 老師

  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const [isAdult, setIsAdult] = useState('');
  // const yearls = [];
  // const monthls = [];

  // for (let i = 1920; i <= 2010; i++) {
  //   yearls.push(i);
  // }
  // for (let i = 1; i <= 12; i++) {
  //   monthls.push(i);
  // }

  // const array31 = [];
  // for (let i = 1; i <= 31; i++) {
  //   array31.push(i);
  // }
  // const [dayls, setDayls] = useState(makeOptions(1, 31));

  return (
    <>
      <span>西元:</span>
      <select
        value={year}
        onChange={(e) => {
          setYear(e.target.value);
          setIsAdult('');
        }}
      >
        <option>請選擇</option>
        {/* {yearls.map((v, i) => { */}
        {makeOptions(1920, 2010).map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          );
        })}
      </select>
      <span>年</span>
      <select
        value={month}
        onChange={(e) => {
          const newMonth = e.target.value;
          setMonth(newMonth);
          setIsAdult('');
          // const days = new Date(year, newMonth, 0).getDate();
          // const newDayls = [];
          // for (let i = 1; i <= days; i++) {
          //   newDayls.push(i);
          // }
          // setDayls(newDayls);
        }}
      >
        <option>請選擇</option>
        {/* {monthls.map((v, i) => { */}
        {makeOptions(1, 12).map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          );
        })}
      </select>
      <span>月</span>
      <select
        value={day}
        onChange={(e) => {
          setDay(e.target.value);
          setIsAdult('');
        }}
      >
        <option>請選擇</option>
        {/* {dayls.map((v, i) => { */}
        {year !== '' &&
          month !== '' &&
          // 沒選year && month, day就不會出現option
          makeOptions(1, new Date(year, month, 0).getDate()).map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            );
          })}
      </select>
      <span>日</span>
      <button
        onClick={() => {
          const birthDate = year + '/' + month + '/' + day;
          const selTime = +new Date(birthDate);
          // +new Date(birthDate) === Number(new Date(birthDate))
          const nowTime = +new Date();
          // console.log(selTime);
          // console.log(nowTime);
          const ms18years = 568036800000;
          const ageTime = nowTime - selTime;
          if (year === '' || month === '' || day === '') {
            setIsAdult('請選擇出生年月日');
          } else if (ageTime >= ms18years) {
            setIsAdult('成年');
          } else {
            setIsAdult('未成年');
          }
        }}
      >
        Submit
      </button>
      <hr />
      <div>
        <p>
          {year}/{month}/{day}
        </p>

        <h2 className={isAdult === '成年' ? 'isAdult' : 'isNotAdult'}>
          {isAdult}
        </h2>
      </div>
    </>
  );
}

export default Age;
