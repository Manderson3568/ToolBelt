import Heading from "../../Heading/Heading";
import Keypad from "../../Keypad/Keypad";
import { useState } from "react";
import Display from "../../Display/Display";

const CalculatorPage = () => {
  const [currentNumber, setCurrentNumber] = useState(null);
  const [total, setTotal] = useState(null);
  const [operator, setOperator] = useState(null);
  const [equalsTotal, setEqualsTotal] = useState(null);
  //adds digit to currentNumber, or clears currentNumber from CE
  const handleNumber = (number) => {
    number
      ? setCurrentNumber(currentNumber ? currentNumber + number : number)
      : setCurrentNumber(null);
  };
  //Clears all from C
  const clearAll = () => {
    setTotal(null);
    setOperator(null);
    setCurrentNumber(null);
  };
  const calculateTotal = (operator) => {
    if (operator === "+") {
      setTotal(String(Number(total) + Number(currentNumber)));
    }
    if (operator === "-") {
      setTotal(String(Number(total) - Number(currentNumber)));
    }
    if (operator === "/") {
      setTotal(String(Number(total) / Number(currentNumber)));
    }
    if (operator === "*") {
      setTotal(String(Number(total) * Number(currentNumber)));
    }
    if (operator === "*") {
      setTotal(String(Number(total) * Number(currentNumber)));
    }
    if (operator === "%") {
      setTotal(String((Number(currentNumber) / Number(total)) * 100));
    }
  };
  const getOperator = (newOperator) => {
    if (!operator && currentNumber) {
      setOperator(newOperator);
      setTotal(currentNumber);
      setCurrentNumber(null);
    } else if (!currentNumber && operator) {
      setOperator(newOperator);
    } else if (newOperator === "=") {
      calculateTotal(operator);
      setOperator(null);
    } else {
      calculateTotal(operator);
      setOperator(newOperator);
      setCurrentNumber(null);
    }
  };

  return (
    <div>
      <Heading text="Calculator" />
      <Display
        currentNumber={currentNumber}
        operator={operator}
        total={total}
      />
      <Keypad
        returnNumber={handleNumber}
        clearAll={clearAll}
        operator={getOperator}
      />
    </div>
  );
};
export default CalculatorPage;
