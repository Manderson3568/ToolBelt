const CalcButton = ({ text, isFunction, returnFunction }) => {
  return (
    <input
      type="button"
      value={text}
      onClick={() => {
        returnFunction(text); //to not return symbols
      }}
    />
  );
};
export default CalcButton;
