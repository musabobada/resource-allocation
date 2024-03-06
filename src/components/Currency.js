import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Currency = () => {
  const { dispatch } = useContext(AppContext);
  function handleChange(e) {
    dispatch({ type: "currency", payload: { currency: e.target.value } });
  }

  return (
    <div className="col-sm">
      <div className="alert alert-secondary">
        Currency
        {
          <select name="Location" id="Location" onChange={handleChange}>
            <option value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
          </select>
        }
      </div>
    </div>
  );
};
export default Currency;
