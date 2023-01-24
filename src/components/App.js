import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TodoListPage from "./pages/TodoListPage/TodoListPage";
import CalculatorPage from "./pages/CalculatorPage/CalculatorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/todo" element={<TodoListPage />} />
      </Routes>
    </div>
  );
}

export default App;
