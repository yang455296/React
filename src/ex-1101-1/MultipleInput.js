import { useState } from 'react';
function MultipleInput() {
  //   const [username, setUsername] = useState('');
  //   const [password, setPassword] = useState('');

  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const handleFieldChange = (e) => {
    // console.log(e.target, e.target.type, e.target.name, e.target.value);

    // computed property name [e.target.name]: e.target.value 可以去下面連結看
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    const newUser = { ...user, [e.target.name]: e.target.value };
    setUser(newUser);
  };

  // true呈現密碼 false隱藏密碼
  const [showPW, setShowPW] = useState(false);

  return (
    <>
      <label>帳號</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleFieldChange}
      />
      <br />
      <label>密碼</label>
      <input
        type={showPW ? 'text' : 'password'}
        name="password"
        value={user.password}
        onChange={handleFieldChange}
      />
      <input
        type="checkbox"
        name="showPW"
        checked={showPW}
        onChange={() => {
          setShowPW(!showPW);
        }}
      />
      <label>顯示密碼</label>
    </>
  );
}

export default MultipleInput;
