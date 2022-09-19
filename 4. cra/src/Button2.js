import PropTypes from "prop-types";

function Button2({ text }) {
  return (
    <button
      style={{
        backgroundColor: 'tomato',
        color: 'white'
      }}
    >{text}</button>
  );
}

Button2.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button2;