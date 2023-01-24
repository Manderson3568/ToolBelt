import CalcButton from "../CalcButton/CalcButton";

const Keypad = ({ returnNumber, clearAll, operator }) => {
  const handleNumber = (number) => {
    returnNumber(number);
  };
  const handleClearCurrent = () => {
    returnNumber(null);
  };
  const handleClearAll = () => {
    clearAll();
  };
  const handleOperator = (text) => {
    operator(text);
  };
  return (
    <div>
      <CalcButton text="1" returnFunction={handleNumber} />
      <CalcButton text="2" returnFunction={handleNumber} />
      <CalcButton text="3" returnFunction={handleNumber} />
      <CalcButton text="4" returnFunction={handleNumber} />
      <CalcButton text="5" returnFunction={handleNumber} />
      <CalcButton text="6" returnFunction={handleNumber} />
      <CalcButton text="7" returnFunction={handleNumber} />
      <CalcButton text="8" returnFunction={handleNumber} />
      <CalcButton text="9" returnFunction={handleNumber} />
      <CalcButton text="0" returnFunction={handleNumber} />
      <CalcButton text="CE" returnFunction={handleClearCurrent} />
      <CalcButton text="C" returnFunction={handleClearAll} />
      <CalcButton text="+" returnFunction={handleOperator} />
      <CalcButton text="-" returnFunction={handleOperator} />
      <CalcButton text="*" returnFunction={handleOperator} />
      <CalcButton text="/" returnFunction={handleOperator} />
      <CalcButton text="%" returnFunction={handleOperator} />
      <CalcButton text="=" returnFunction={handleOperator} />
    </div>
  );
};
export default Keypad;
