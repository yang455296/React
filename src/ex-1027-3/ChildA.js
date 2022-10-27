function ChildA(props) {
  return (
    <>
      <h1>ChildA</h1>
      <p>資料: ChildB到Parent再到ChildA</p>
      <p>來自ChildB的資料: {props.dataFromChildB} </p>
    </>
  );
}

export default ChildA;
