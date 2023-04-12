const Button = ({ text, color, backgroundColor, border }) => {
  return (
    <div>
      <button backgroundColor={backgroundColor} color={color} border={border}>
        {text}
      </button>
    </div>
  );
};

export default Button;
