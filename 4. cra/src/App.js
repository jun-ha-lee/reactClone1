import Button from "./Button";
import Button2 from "./Button2";
import styles from "./App.module.css"; // App.module.css를 여기에 삽입

function App() {
  return (
    <div>
      <h1
        className={styles.title} // App.module.css안의 title클래스 네임의 css 적용
      >welcome back!!!</h1>
      <Button text={'Continue'} />
      <Button2 text={'Button2 not css style'} />
    </div>
  );
}

export default App;
