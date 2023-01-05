import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
    let initialState = [
        { id: 0, value: 0, name: "Ненужная вещь" },
        { id: 1, value: 0, name: "Ложка" },
        { id: 2, value: 3, name: "Вилка" },
        { id: 3, value: 0, name: "Тарелка" },
        { id: 4, value: 0, name: "Набор минималиста" },
    ];

    const [counters, setCounters] = useState(initialState);

    
    function handleDelete(id) {
        setCounters(counters.filter((counter) => counter.id !== id));
    }

    function handleReset() {
        setCounters(initialState);
    }
    function handleIncrement(index) {
        setCounters(counters.map((counter, idx) => {
            if (idx===index) counter.value += 1;
            return counter;
        }))
    }
    
    function handleDecrement(index) {
        setCounters(counters.map((counter, idx) => {
            if (idx===index) counter.value -= 1;
            return counter;
        }))
    }
    return (
        <>
            {counters.map((counter, idx) => (
                <Counter
                    key={counter.id}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    idx={idx}
                    {...counter}
                ></Counter>
                
            ))}
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
        </>
    );
};

export default CountersList;
