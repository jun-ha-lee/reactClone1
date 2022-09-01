import { useState, useEffect } from "react"; // useState와 useEffect를 import시킨다

function App() {
  const [counter, setCounter] = useState(0); // 위에서 useState를 import시켜서 여기에 React.을 안써도 된다
  const [keyword, setKeyword] = useState('');
  const onChange = (event) => { // 얘는 함수이고 컴포넌트가 아님, input에 이벤트리스너로 들어감
    // input에서 onChange가 발생하면 event로 받음
    // console.log(event);
    setKeyword(event.target.value);
    // console.log(event.target.value);
  }
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
  console.log('계속실행된다'); // counter가 변할때마다 렌더링 되어 찍힌다

  const onlyOne = () => {
    return console.log('오직 한번만 실행된다');
  }
  useEffect(onlyOne, []); // useEffect로 onlyOne함수가 counter가 변해도 한번만 실행된다
  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) { // keyword가 빈값이 아니고 5글자보다 클때 실행
      console.log(`나는 지금 ${keyword}를 찾고있다`);
    }
  }, [keyword]); // []안에 keyword라고 넣어주면 keyword가 변할때만 실행된다
  //
  // console.log(`나는 지금 ${keyword}를 찾고있다`); // 계속 실행됨, 검색부분이 변할때만 실행되어야 한다

  useEffect(() => {
    console.log('counter 가 변할때만 실행된다');
  }, [counter]);

  useEffect(() => {
    console.log('keyword와 counter가 변할때 실행');
  }, [keyword, counter]);


  return (
    <div>
      <input
        type='text'
        placeholder="검색해"
        onChange={onChange} // 값이 바뀌면(onChange) onChange함수 호출

        // onChange(event)에서 넘긴것을 setKeyword로 바꾼후 value값을 다시 넘김
        value={keyword}>
      </input>
      <h1>hello! {counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
