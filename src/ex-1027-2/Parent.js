import { useState } from 'react';
import Child from './Child';

function Parent() {
  return (
    <>
      <Child firstName="Eddy" lastName="Chang" />
    </>
  );
}

export default Parent;
//parent傳給child
