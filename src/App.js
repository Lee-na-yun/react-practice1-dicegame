import Board from "./Board";
import { useState } from "react";
import Button from "./Button";

function random(n) {
  return Math.ceil(Math.random() * n);
} // 파라미터 n으로 숫자값을 전달 받아서 1부터 n까지의 랜덤한 정수를 반환하는 함수

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0); //총점 구하는 state -> 초기값 0으로 줌
  const [gameHistory, setGameHistory] = useState([]); // 빈배열을 초기값으로 받는 state
  const [othernum, setOtherNum] = useState(1);
  const [othersum, setOtherSum] = useState(0); //총점 구하는 state -> 초기값 0으로 줌
  const [othergameHistory, setOtherGameHistory] = useState([]); // 빈배열을 초기값으로 받는 state

  const handleRollClick = () => {
    const nextNum = random(6);
    const nextOtherNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum); // 총점
    // gameHistory.push(nextNum); //gameHistory가 배열이니까 push 메소드로 nextNum을 추가하고
    setGameHistory([...gameHistory, nextNum]); //새 값이 추가된 gameHistory State를 전달
    setOtherNum(nextOtherNum);
    setOtherSum(sum+nextOtherNum);
    setOtherGameHistory([...othergameHistory, nextOtherNum]);
  }; //num state를 바꾸는 함수

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
    setOtherNum(1);
    setOtherSum(0);
    setOtherGameHistory([]);
  }; //초기화 기능

  return (
    <div>
      <div>
        <div>
          <Button onClick={handleRollClick}>던지기</Button>
          <Button onClick={handleClearClick}>처음부터</Button>
        </div>
        <Board name="나" color="blue" num={num} sum={sum} gameHistory={gameHistory} /> 
        <Board name="상대" color="red" num={othernum} sum={othersum} gameHistory={othergameHistory} />
      </div>
    </div>
  );
}

export default App;
