import { useState, useEffect } from "react"; // useState와 useEffect를 import시킨다

function App() {
  // input에서 값 받아오기
  const [todo, setTodo] = useState('');
  function onChange(e) {
    // console.log(e.target.value);
    setTodo(e.target.value); // setTodo설정을 안하게 되면 입력을 해도 변하지 않음
  }
  // end

  // 여러개의 할일을 받아오는 배열 만들기
  const [todos, setTodos] = useState([]); // 배열로 만들거라서 초기값은 빈 배열로

  // form에서
  function onSubmit(e) {
    e.preventDefault(); // 할일 추가 버튼 클릭시 새로고침 제한
    // console.log(todo);
    if (todo === '') { // 할것을 안적었을때
      return; // 종료시킨다
    }

    // 할일 추가 후 input을 비우고싶다
    setTodo('');

    // 여러개의 할일을 받아오는 배열
    setTodos(function (currentArray) {
      return [todo, ...currentArray];
    });
    // setTodos(currentArray => [todo, ...currentArray]); // cat짤 참고, ...은 스레드 문법
    // ...은 currentArray로 받아온 배열 값 전체를 가져온다는 의미(currentArray[전체])
    // 새로 입력한 값은 맨앞에 계속 추가된다
  }
  // end

  console.log(todos);

  return (
    <div>
      <h1>나의 할일 목록({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input type='text' placeholder="너가 할것을 적어요" value={todo} onChange={onChange} />
        <button>할일 추가하기</button>
      </form>
      <hr />
      <ul>
        {todos.map((currentTodo, index) => <li key={index}>{currentTodo}</li>)} {/* map함수, 할일이 쌓여있는 todos의 배열을 currentTodo로 받아오고 <li>에 뿌려준다 */}
        {/* <li>에 뿌려줄땐 key값을 사용, catjjal참고, key는 고유의 값이어야 한다 */}
        {/* map()에서 두번째 argument가 index(숫자)라는 유니크한 값을 가진다 */}
      </ul>
    </div>
  );
}

export default App;
