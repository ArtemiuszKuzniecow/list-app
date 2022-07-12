import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Useless thing" },
    { id: 1, value: 4, name: "Spoon" },
    { id: 2, value: 0, name: "Fork" },
    { id: 3, value: 0, name: "Plate" },
    { id: 4, value: 0, name: "Minimalist's set" },
  ];

  const [counters, setCounter] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounter(newCounters);
  };

  const handleReset = () => {
    setCounter(initialState);
  };

  const handleIncrease = (val) => {
    const increasedCounters = counters.map((count) => {
      if (count.id === val) {
        count.value++;
      }
      return count;
    });
    setCounter(increasedCounters);
  };

  const handleDecrease = (val) => {
    const reducedCounters = counters.map((count) => {
      if (count.id === val && count.value > 0) {
        count.value--;
      }
      return count;
    });
    setCounter(reducedCounters);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

export default CountersList;
