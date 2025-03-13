// tsrfc

import React, { useState } from "react";

export default function ExNumber() {
  let [number, setNumber] = useState<number>(0);
  // ():void => function không có giá trị trả về
  let handleUpNumber = (): void => {
    setNumber(number + 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleUpNumber}>Plus</button>
    </div>
  );
}
