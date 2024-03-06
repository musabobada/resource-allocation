import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Currency = () => {
  const { dispatch, currency, budget } = useContext(AppContext);
  function handleChange(e) {
    dispatch({ type: "budget", payload: { budget: +e.target.value } });
  }
  return (
    <div className="col-sm">
      <div className="alert alert-secondary">
        Budget {currency} <input type="number" min={0} value={budget} onChange={handleChange} style={{ maxWidth: "80px" }} />
      </div>
    </div>
  );
};
export default Currency;
