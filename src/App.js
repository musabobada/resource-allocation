import React from "react";
import { AppProvider } from "./context/AppContext";
import Spent from "./components/Spent";
import Remaining from "./components/Remaining";
import AllocationList from "./components/AllocationList";
import ChangeAllocation from "./components/ChangeAllocation";
import Currency from "./components/Currency";
import Budget from "./components/Budget";
import "./App.css";
const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <div className="row mt-3">
          <Budget />
          <Remaining />
          <Spent />
          <Currency />
        </div>
        <AllocationList />
        <ChangeAllocation />
      </div>
    </AppProvider>
  );
};
export default App;
