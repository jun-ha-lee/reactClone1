import { useState, useEffect } from "react";
import styles from "./App.module.css";

// input을 만들어서, 내가 가진금액을 적을수 있게 하고, 그돈을 얼마만큼의 btc로 바꿀수있는지, 얼마만큼의 이더로 바꿀수있는지


function App() {
  // 로딩을 위한
  const [loading, setLoading] = useState(true); // 로딩의 기본값은 true(로딩이 되고있다, 안되고 있다)

  // 로딩이 완료되었을때, API불러옴(한번만 쓸것)
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers") // API 받기, 첫번째 인자는 주소
      .then((response) => response.json()) // API호출이 성공했을 경우 response객체를 가져온다
      .then((json) => {
        setCoins(json); // 코인데이터를 빈 코인데이터배열에 넣어주기 위해
        setLoading(false); // API에서 코인가져오기가 끝나면 로딩은 false로 바꿔줘야 한다
      });
  }, []);

  // API에서 가져온 코인 데이터를 빈 배열에 넣어주기
  const [coins, setCoins] = useState([]);

  // 사용자가 코인선택하기(코인 이름과 가격)
  const [selectCoin, setSelectCoin] = useState('ss');
  const onSelect = (e) => {
    setSelectCoin(e.target.value);
    console.log(e.target);
  }

  // 사용자 얼마있는지 입력받기
  const [money, setMoney] = useState('');
  const inputMoney = (e) => {
    setMoney(e.target.value);
  }

  // 리셋하기
  const reset = () => {
    setMoney('');
    setSelectCoin('ss');
    setResult(0);
  }

  // 계산하기 버튼
  const [result, setResult] = useState(0);
  const calcMoney = () => {
    // console.log(coins.find());
    console.log(selectCoin);
    // console.log(coins.name);
    // 얼마있나요?가 빈칸일때와 코인선택을 안했을때 비활성화
    if (money === '' || selectCoin === 'ss') {
      alert('금액 입력해주세요 혹은 코인을 선택해주세요');

    }

    coins.map(function (c) {
      //console.log(c.name);
      if (c.name === selectCoin) {
        const priceCalc = money / c.quotes.USD.price;
        console.log(priceCalc);
        setResult(priceCalc);
      }
    });

  }


  return (
    <div>
      <h1>Coin List {coins.length}</h1>
      {loading ? <strong>loading...</strong> : null}
      <div className={styles.title}>
        <div>
          <ul>
            {coins.map((currentCoin) => <li key={currentCoin.id}>{currentCoin.name} ({currentCoin.symbol}): ${currentCoin.quotes.USD.price} USD</li>)}
            {/* id와 name과 symbol, quotes, USD, price는 API에서 가져온 것에 나와있음 */}
          </ul>
        </div>
        <div>
          {!loading ? <select value={selectCoin} onChange={onSelect}>
            <option value={'ss'}>코인을 선택하세요.</option>
            {coins.map((currentCoin) => <option value={currentCoin.name}>{currentCoin.name} ({currentCoin.symbol}): ${currentCoin.quotes.USD.price} USD</option>)}
          </select> : null} {/* loading화면이 나올때는 select가 나오지 않게 */}
          <div>
            <input value={money}
              placeholder='얼마있나요?'
              onChange={inputMoney}
              type='number'
            />
            <button onClick={reset}>초기화</button>
          </div>
          <button onClick={calcMoney}>계산하기</button>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
