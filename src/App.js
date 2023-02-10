import { useState } from "react";
import Button from "./Button";
import Dice from "./Dice";

function App() {
  const [num, setNum] = useState(1);
  const handleRollClick = ()=>{
    setNum(3);
  }; //num state를 3으로 바꾸는 함수

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button>처음부터</Button>
      </div>
      <Dice color="red" num={num} />
    </div>
  );
}

export default App;
