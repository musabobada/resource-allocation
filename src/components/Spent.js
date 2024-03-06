import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Remaining = () => {
  const { totalAllocation, currency } = useContext(AppContext);
  return (
    <div className="col-sm">
      <div className="alert alert-primary">
        <span>
          Spent so far: {currency}
          {totalAllocation}
        </span>
      </div>
    </div>
  );
};
export default Remaining;
