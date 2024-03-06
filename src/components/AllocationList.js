import React, { useContext } from "react";
import AllocationItem from "./AllocationItem";
import { AppContext } from "../context/AppContext";
const AllocationList = () => {
  const { allocations, currency } = useContext(AppContext);
  return (
    <>
      <h3 className="mt-3">Allocation</h3>
      <div className="row ">
        <div className="col-sm">
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">Department</th>
                <th scope="col">Allocation Budget</th>
                <th scope="col">Increase By 10</th>
                <th scope="col">Decrease By 10</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {allocations.map((allocation) => (
                <AllocationItem id={allocation.id} key={allocation.id} currency={currency} name={allocation.name} budget={allocation.budget} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default AllocationList;
