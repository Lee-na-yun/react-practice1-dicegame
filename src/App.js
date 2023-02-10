import { useState } from "react";
import Button from "./Button";
import Dice from "./Dice";

function random(n) {
  return Math.ceil(Math.random() * n);
} // 파라미터 n으로 숫자값을 전달 받아서 1부터 n까지의 랜덤한 정수를 반환하는 함수

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0); //총점 구하는 state -> 초기값 0으로 줌
  const [gameHistory, setGameHistory] = useState([]); // 빈배열을 초기값으로 받는 state

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum); // 총점
    // gameHistory.push(nextNum); //gameHistory가 배열이니까 push 메소드로 nextNum을 추가하고
    setGameHistory([...gameHistory, nextNum]); //새 값이 추가된 gameHistory State를 전달
  }; //num state를 바꾸는 함수

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
  }; //초기화 기능

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <h2>나</h2>
        <Dice color="blue" num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        <p>{gameHistory.join(", ")}</p>
      </div>
    </div>
  );
}

export default App;
