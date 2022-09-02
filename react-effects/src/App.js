import { useState, useEffect } from "react"; // useState와 useEffect를 import시킨다


// Clean Up
function Hello() { // 컴포넌트

  /*
  function effctFn() {
    console.log('hello컴포넌트 만들어졌다'); // effctFn함수가 실행될때(Hello컴포넌트 렌더링할때) 사용
    return destroyedFn; // effctFn함수가 끝나고나서(Hello컴포넌트가 사라질때) 사용(반환)
  }

  function destroyedFn() {
    return console.log('hello컴포넌트 없어졌다');
  }

  useEffect((effctFn), []);
  */

  useEffect(() => {
    console.log('나타났다!');
    return () => console.log('없어졌다!');
  }, []);

  useEffect(function () {
    console.log('나타났다!');
    return function () {
      console.log('없어졌다!');
    }
  }, []);

  /*
  useEffect(effctFn
    console.log('hello컴포넌트 만들어졌다');
    
    return () => {
      console.log('hello컴포넌트 없어졌다');
    }
    , []); // Hello컴포넌트가 나올때만 호출
    */
  return (
    <h1>Hello</h1>
  );

}
// end

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
  // 오직 한번만 실행

  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) { // keyword가 빈값이 아니고 5글자보다 클때 실행
      console.log(`나는 지금 ${keyword}를 찾고있다`);
    }
  }, [keyword]); // []안에 keyword라고 넣어주면 처음과 keyword가 변할때만 실행된다
  //
  // console.log(`나는 지금 ${keyword}를 찾고있다`); // 계속 실행됨, 검색부분이 변할때만 실행되어야 한다

  useEffect(() => {
    console.log('counter 가 변할때만 실행된다');
  }, [counter]); // 처음과 counter가 변할때만 실행

  useEffect(() => {
    console.log('keyword와 counter가 변할때 실행');
  }, [keyword, counter]); // 처음과 keyword 또는 counter가 변할때만 실행

  // clean up
  const [showing, setShowing] = useState(false);
  const showOnClick = () => {
    setShowing((prev) => !prev); // showing 초기값이 false이므로 아래 showing ? 'Hide' : 'Show' 에서
    // 처음값은 Show이고 버튼 클릭시 prev로 받아오고 !prev가 되기때문에 Hide
  }


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
      <hr></hr>
      <h1>Clean Up</h1>
      {showing ? <Hello /> : null} {/* showing이 true이면 Hello컴포넌트 보여줌 */}
      <button onClick={showOnClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App;
