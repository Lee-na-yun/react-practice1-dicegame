import Board from "./Board";
import { useState } from "react";
import Button from "./Button";
import './App.css';

function random(n) {
  return Math.ceil(Math.random() * n);
} // 파라미터 n으로 숫자값을 전달 받아서 1부터 n까지의 랜덤한 정수를 반환하는 함수

function App() {
  const [mygameHistory, setMyGameHistory] = useState([]); // 빈배열을 초기값으로 받는 state
  const [othergameHistory, setOtherGameHistory] = useState([]); // 빈배열을 초기값으로 받는 state

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    // gameHistory.push(nextNum); //gameHistory가 배열이니까 push 메소드로 nextNum을 추가하고
    setMyGameHistory([...mygameHistory, nextMyNum]); //새 값이 추가된 gameHistory State를 전달
    setOtherGameHistory([...othergameHistory, nextOtherNum]);
  }; //num state를 바꾸는 함수

  const handleClearClick = () => {
    setMyGameHistory([]);
    setOtherGameHistory([]);
  }; //초기화 기능

  return (
    <div className="App">
      <div>
        <div>
          <Button className="App-button" color="blue" onClick={handleRollClick}>던지기</Button>
          <Button className="App-button" color="red" onClick={handleClearClick}>처음부터</Button>
        </div>
        <Board name="나" color="blue" gameHistory={mygameHistory} /> 
        <Board name="상대" color="red" gameHistory={othergameHistory} />
      </div>
    </div>
  );
}

export default App;
