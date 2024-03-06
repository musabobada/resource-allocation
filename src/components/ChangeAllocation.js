import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const ChangeAllocation = (props) => {
  const { dispatch, allocations, currency } = useContext(AppContext);
  const [department, setDepartment] = useState("Marketing");
  const [budget, setBudget] = useState(500);
  const [action, setAction] = useState("Add");

  const submitEvent = (e) => {
    e.preventDefault();
    if (action === "Add") {
      dispatch({
        type: "ADD",
        payload: { department, budget },
      });
    } else if (action === "Reduce") {
      console.log(action);
      dispatch({
        type: "REDUCE",
        payload: { department, budget },
      });
    }
  };
  return (
    <>
      <h3 className="mt-3">Change Allocation</h3>
      <div className="row mt-3">
        <div>
          <div className="col-sm">
            <div className="row">
              <form className="input-group mb-3" style={{ marginLeft: "2rem" }}>
                <div className="input-group-prepend">
                  <label className="input-group-text" htmlFor="inputGroupSelect01">
                    Department
                  </label>
                  <select className="custom-select" id="inputGroupSelect01" value={department} onChange={(e) => setDepartment(e.target.value)}>
                    {allocations.map((element) => (
                      <option key={element.name} name={element.name} value={element.name}>
                        {element.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
                  <label className="input-group-text" htmlFor="inputGroupSelect02">
                    Allocation
                  </label>
                  <select className="custom-select" id="inputGroupSelect02" value={action} onChange={(e) => setAction(e.target.value)}>
                    <option value="Add" name="Add">
                      Add
                    </option>
                    <option value="Reduce" name="Reduce">
                      Reduce
                    </option>
                  </select>
                  <span className="eco" style={{ margin: "auto  0.25rem auto 2rem" }}>
                    {currency}
                  </span>
                  <input required="required" type="number" id="cost" min={0} value={budget} onChange={(e) => setBudget(+e.target.value)} />
                </div>
                <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: "2rem" }}>
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChangeAllocation;
