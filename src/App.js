import { useState } from "react";
import Button from "./Button";
import Dice from "./Dice";

function random(n) {
  return Math.ceil(Math.random() * n);
} // 파라미터 n으로 숫자값을 전달 받아서 1부터 n까지의 랜덤한 정수를 반환하는 함수

function App() {
  const [num, setNum] = useState(1);

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
  }; //num state를 3으로 바꾸는 함수

  const handleClearClick = ()=>{
    setNum(1);
  };

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <Dice color="red" num={num} />
    </div>
  );
}

export default App;
