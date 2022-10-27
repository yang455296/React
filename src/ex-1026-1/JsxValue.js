function JsxValue() {
  return (
    <>
      <h1>JSX的值與表達式</h1>
      <hr />
      <h2>Number</h2>
      {123 - 99}
      <br />
      {NaN}
      <h2>String</h2>
      {'abc'}
      <br />
      {`total = ${100 - 5}`}
      <h2>boolean</h2>
      {true}
      {false}
      <h2>null</h2>
      {null}
      <h2>undefined</h2>
      {undefined}
      <h2>array</h2>
      {[1, 2, 3, 4]}
      <h2>object</h2>
      {/* {{ a: 1, b: 2 }} 物件不能直接用在JSX */}
      <h2>function</h2>
      {/* {() => {}} */}
      {(() => {
        return <div>Hello World </div>;
      })()}
      {/* 最後要()呼叫fuction */}
    </>
  );
}

export default JsxValue;
