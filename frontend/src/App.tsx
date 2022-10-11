import "./App.css";
import MyHeader from "./components/header";
import DenseTable from "./components/displayTable";
import BasicSelect from "./components/selector";
import { useNavigate } from "react-router";
import B4Button from "./components/buttonB4";

function App() {
  return (
    <div className="app">
      <MyHeader />
      <DenseTable />
      <BasicSelect />
      <B4Button />
    </div>
  );
}

export default App;
