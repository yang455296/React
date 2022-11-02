import { useState } from 'react';
// import { component } from 'react';

function Age() {
  const [year, setYear] = useState(1920);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);

  const [isAdult, setIsAdult] = useState('未成年');
  // const yearls = [];
  // const monthls = [];
  // const [dayls, setDayls] = useState([]);
  // const [dayNum, setDayNum] = useState(new Date(1920, 1, 0).getDate());

  // for (let i = 1920; i <= 2010; i++) {
  //   yearls.push(i);
  // }
  // for (let i = 1; i <= 12; i++) {
  //   monthls.push(i);
  // }
  // for (let i = 1; i <= dayNum; i++) {
  //   dayls.push(i);
  // }

  return (
    <>
      <input
        type="number"
        value={year}
        onChange={(e) => {
          setYear(e.target.value);
        }}
      />
      <input
        type="number"
        value={month}
        onChange={(e) => {
          // let newMonth = 1;
          // if (e.target.value.length === 1) {
          //   newMonth = '0' + e.target.value;
          // }
          setMonth(e.target.value);
        }}
      />
      <input
        type="number"
        value={day}
        onChange={(e) => {
          // let newDay = 1;
          // console.log(e.target.value.length);
          // if (e.target.value.length === 1) {
          //   newDay = '0' + e.target.value;
          // }

          setDay(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const birthDate = '' + year + '/' + month + '/' + day;
          const selTime = +new Date(birthDate);
          const nowTime = +new Date();
          // console.log(selTime);
          // console.log(nowTime);

          const ageTime = nowTime - selTime;
          if (ageTime > 568036800000) {
            setIsAdult('成年');
          } else {
            setIsAdult('未成年');
          }
        }}
      >
        Submit
      </button>
      <hr />
      <div>{isAdult}</div>
      {/* <div>
        {year}/{month}/{day}
      </div> */}
      {/* <select
        value={year}
        onChange={(e) => {
          setYear(e.target.value);
          setDayNum(new Date({ year }, { month }, 0).getDate());
        }}
      >
        {yearls.map((v, i) => {
          return (
            <option key={i} value={i}>
              {v}
            </option>
          );
        })}
      </select>
      <select
        value={month}
        onChange={(e) => {
          const newMonth = Number(e.target.value) + 1;
          setMonth(newMonth);
          // console.log(month);
          console.log({ year });
          console.log(e.target.value);
          console.log(Number(e.target.value));
          console.log(Number(e.target.value) + 1);

          console.log(newMonth);
          const newDayNum = new Date({ year }, newMonth, 0).getDate();
          console.log(newDayNum);
          setDayNum(newDayNum);

          const newar = [];
          for (let i = 1; i <= newDayNum; i++) {
            newar.push(i);
          }

          setDayls(newar);
        }}
      >
        {monthls.map((v, i) => {
          return (
            <option key={i} value={i}>
              {v}
            </option>
          );
        })}
      </select>
      <select
        value={day}
        onChange={(e) => {
          setDay(e.target.value);
        }}
      >
        {dayls.map((v, i) => {
          return (
            <option key={i} value={i}>
              {v}
            </option>
          );
        })}
      </select> */}
    </>
  );
}

export default Age;
