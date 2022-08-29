import { useState } from "react"; // useState를 import시킨다

function App() {
  const [counter, setCounter] = useState(0); // 위에서 useState를 import시켜서 여기에 React.을 안써도 된다
  // function onClick() {
  //   return (
  //     setCounter(
  //       function (current) {
  //         return current + 1;
  //       }
  //     )
  //   );
  // }

  const onClick = () => setCounter((current) => current + 1);
  console.log('render'); // counter가 변할때마다 렌더링 되어 찍힌다
  return (
    <div>
      <h1>hello! {counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
