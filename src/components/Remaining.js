import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Spent = () => {
  const { remaining, currency } = useContext(AppContext);
  return (
    <div className="col-sm">
      <div className="alert alert-primary">
        <span>
          Remainig: {currency}
          {remaining}
        </span>
      </div>
    </div>
  );
};
export default Spent;
