import React, { createContext, useReducer } from "react";
// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (action.payload.budget > state.remaining) return { ...state };
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
          if (action.payload.budget > allocation.budget) return allocation;
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
    { id: "Marketing", name: "Marketing", budget: 200 },
    { id: "Finane", name: "Finane", budget: 10 },
    { id: "Sales", name: "Sales", budget: 50 },
    { id: "Human Resource", name: "Human Resource", budget: 55 },
    { id: "IT", name: "IT", budget: 30 },
  ],
  currency: "$",
  budget: "1000",
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
