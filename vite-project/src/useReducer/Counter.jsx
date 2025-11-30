import React, { useState } from "react";
import { useReducer } from "react";
import { initialState, counterReducer } from "./counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [amount, setAmount] = useState(0);
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  const handleReset = () => {
    dispatch({ type: "reset" });
  };
  const handleIncrementByAmount = (e) => {
    e.preventDefault();
    dispatch({ type: "incrementByAmount", payload: Number(amount) });
    setAmount(0);
  };
  const handleDecrementByAmount = (e) => {
    e.preventDefault();
    dispatch({ type: "decrementByAmount", payload: Number(amount) });
    setAmount(0);
  };
  return (
    <div style={{ marginLeft: "40px" }}>
      <p>
        Count:{" "}
        <span
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            lineHeight: 0,
            marginLeft: "20px",
          }}
        >
          {state.count}
        </span>
      </p>
      <h2>a. Counter change by 1</h2>

      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <h2 style={{ marginTop: "40px" }}>b. Counter change by amount</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "320px",
        }}
      >
        <input
          style={{ padding: "10px" }}
          type="number"
          placeholder="Enter amount"
          id="amountInput"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div>
          <button type="submit" onClick={handleIncrementByAmount}>
            Increment
          </button>
          <button type="submit" onClick={handleDecrementByAmount}>
            Decrement
          </button>
        </div>
      </form>
    </div>
  );
};

export default Counter;
