import React, { createContext, useReducer } from "react";
// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (action.payload.budget > state.remaining) {
        alert(`the value shuld not exeed the ${state.currency} ${state.remaining}`);
        return { ...state };
      }
      const updatedAllocations = state.allocations.map((allocation) => {
        if (allocation.name === action.payload.department) {
          return { ...allocation, budget: allocation.budget + action.payload.budget };
        } else {
          return allocation;
        }
      });
      return {
        ...state,
        allocations: updatedAllocations,
      };
    case "REDUCE":
      const updated = state.allocations.map((allocation) => {
        if (allocation.name === action.payload.department) {
          if (action.payload.budget > allocation.budget) {
            alert(`the value shuld not exeed the ${state.currency} ${allocation.budget}`);
            return allocation;
          }
          return { ...allocation, budget: allocation.budget - action.payload.budget };
        } else {
          return allocation;
        }
      });
      return {
        ...state,
        allocations: updated,
      };
    case "INCREASE_ITEM":
      state.allocations = state.allocations.map((allocation) => {
        if (state.remaining < 10) return allocation;
        if (allocation.name === action.payload.name) {
          return { ...allocation, budget: action.payload.budget };
        } else {
          return allocation;
        }
      });
      return {
        ...state,
      };
    case "DECREASE_ITEM":
      state.allocations = state.allocations.map((allocation) => {
        if (action.payload.budget < 0) return allocation;
        if (allocation.name === action.payload.name) {
          return { ...allocation, budget: action.payload.budget };
        } else {
          return allocation;
        }
      });
      return {
        ...state,
      };
    case "DELETE_ITEM":
      state.allocations = state.allocations.filter((allocation) => allocation.name !== action.payload.name);
      return {
        ...state,
      };
    case "currency":
      state.currency = action.payload.currency;
      return {
        ...state,
      };
    case "budget":
      if (action.payload.budget > 20000) {
        alert(`budget value shouldn't exceed 20000`);
        return {
          ...state,
        };
      }
      if (action.payload.budget < state.totalAllocation) {
        alert(`budget value shouldn't be lower than the spending ${state.totalAllocation}`);
        return {
          ...state,
        };
      }
      state.budget = action.payload.budget;
      return {
        ...state,
      };
    default:
      return state;
  }
};
const initialState = {
  allocations: [
    { id: "Marketing", name: "Marketing", budget: 50 },
    { id: "Finane", name: "Finane", budget: 300 },
    { id: "Sales", name: "Sales", budget: 70 },
    { id: "Human Resource", name: "Human Resource", budget: 40 },
    { id: "IT", name: "IT", budget: 500 },
  ],
  currency: "£",
  budget: "2000",
};
export const AppContext = createContext();
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const totalAllocation = state.allocations.reduce((total, item) => total + item.budget, 0);
  state.totalAllocation = totalAllocation;
  state.remaining = state.budget - state.totalAllocation;
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        allocations: state.allocations,
        totalAllocation: state.totalAllocation,
        currency: state.currency,
        remaining: state.remaining,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
