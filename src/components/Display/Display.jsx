const Display = ({ currentNumber, total, operator }) => {
  return (
    <div>
      <p>{total}</p>
      <p>{operator}</p>
      <p>{currentNumber || "0"}</p>
    </div>
  );
};
export default Display;
