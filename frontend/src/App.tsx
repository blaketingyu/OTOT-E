import React from "react";
import "./App.css";
import MyHeader from "./components/header";
import DenseTable from "./components/displayTable";

function App() {
  return (
    <div className="App">
      <MyHeader />
      <DenseTable />
    </div>
  );
}

export default App;
