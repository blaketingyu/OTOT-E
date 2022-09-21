import "./App.css";
import MyHeader from "./components/header";
import DenseTable from "./components/displayTable";
import BasicSelect from "./components/selector";

function App() {
  return (
    <div className="app">
      <MyHeader />
      <DenseTable />
      <BasicSelect />
    </div>
  );
}

export default App;
