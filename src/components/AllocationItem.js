import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaMinusCircle, FaTimesCircle, FaPlusCircle } from "react-icons/fa";
const ExpenseItem = ({ name, budget, currency }) => {
  const { dispatch } = useContext(AppContext);
  return (
    <tr>
      <td>{name}</td>
      <td>
        {currency} {budget}
      </td>
      <td>
        <FaPlusCircle
          size="2.2em"
          color="green"
          onClick={() =>
            dispatch({
              type: "INCREASE_ITEM",
              payload: { name, budget: budget + 10 },
            })
          }
        ></FaPlusCircle>
      </td>
      <td>
        <FaMinusCircle
          size="2.2em"
          color="red"
          onClick={() =>
            dispatch({
              type: "DECREASE_ITEM",
              payload: { name, budget: budget - 10 },
            })
          }
        ></FaMinusCircle>
      </td>
      <td>
        <FaTimesCircle
          size="2.2em"
          color="grey"
          onClick={() =>
            dispatch({
              type: "DELETE_ITEM",
              payload: { name },
            })
          }
        ></FaTimesCircle>
      </td>
    </tr>
  );
};
export default ExpenseItem;
