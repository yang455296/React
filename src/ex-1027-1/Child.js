function Child({ cat, name, price }) {
  //解構位置不同,建議用上面
  // function Child(props) {
  //   const { cat, name, price } = props;

  return (
    <>
      <div>分類: {cat}</div>
      <div>名稱: {name}</div>
      <div>定價: {price}</div>
      {/* <div>分類: {props.cat}</div>
      <div>名稱: {props.name}</div>
      <div>定價: {props.price}</div> */}
    </>
  );
}

export default Child;
