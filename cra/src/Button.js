import PropTypes from "prop-types"; // PropsTypes사용할거다
import styles from "./Button.module.css"; // Button.module.css의 스타일을 여기에 넣는다, import styles로 하는것

function Button({ text }) { // text를 prop으로 갖는다, 여러개 추가 가능 
  return (
    <button
      className={styles.btn1} // Button.module.css안의 btn1클래스네임(실제로 랜덤 클래스네임을 가지게 된다)
    >{text}</button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired, // Button에서 text는 꼭 필요하다 는것을 검사
}
export default Button; // App.js에서 가져가도록 하기 위해 내보낸다