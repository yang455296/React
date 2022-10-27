import { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

function Parent() {
  const [parentData, setParentData] = useState('parent data to childA');

  //接收自ChildB的資料
  const [dataFromChildB, setDataFromChildB] = useState('');
  return (
    <>
      <h1>Parent</h1>
      <p>來自ChildB的資料: {dataFromChildB}</p>
      <hr />
      <ChildA dataFromChildB={dataFromChildB} />
      <ChildB setDataFromChildB={setDataFromChildB} />
    </>
  );
}

export default Parent;
