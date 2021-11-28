import React, {useState} from "react";
import './App.css';

import CountersNumber from "./components/counters-number";
import CountersSum from "./components/counters-sum";
import HeaderButtons from "./components/header-buttons";
import Counter from "./components/counter";


function App() {

    const [counters, setCounters] = useState([]);

    const handleAddCounter = () => {
            const newCounter = {
                id: Math.random().toString(36).substr(2,9),
                value: 0,
            }



  // при добавлении нового счетчика все значения четных счетчиков получают +1
            const newArray = counters.map((c) => {
                if ( c.value > 0 && c.value % 2  === 0) {
                    return {...c, value: c.value + 1}
                }
                return c;
            })
        setCounters([...newArray, newCounter]);

    }

    const handleDelCounter = (counterId) => {
            // const newArr = counters.filter((c) => c.id !== counterId);
            // setCounters(newArr);
        const newArr = counters.map((c) => {
            if (c.value > 0 && c.value % 2 !==0) {
                return {...c, value: c.value - 1}
            }
            return c;
        })
        const newArray = newArr.filter((c) => c.id !== counterId);
        setCounters(newArray);
    }

    const handleResetCounters = () => {
            setCounters([]);
    }

    // сумма значений всех счетчиков!!!!!!!!!
     const counterValuesSum = () => {
        return counters.reduce((prev, current) => prev + current.value, 0);
     }

    const handleDecrement = (counterId) => {
        const newArr = counters.map((c) => {
            if (c.id === counterId) {
                return {...c, value: c.value - 1}
            }
            return c
        })
        setCounters(newArr);
    }
    const handleIncrement = (counterId) => {
        const newArr = counters.map((c) => {
            if (counterId === c.id) {
               return {...c, value: c.value + 1}
            }
            return c
        })
        setCounters(newArr);
    }
    const handleReset = (counterId) => {
        const newArr = counters.map((c) => {
            if (c.id === counterId) {
                return {...c, value: 0}
            }
            return c
        })
        setCounters(newArr);
    };



  return (
    <div className="App">
        <header className='header'>
            <CountersNumber number={counters.length}/>
            <CountersSum sum={counterValuesSum()}/>
            <HeaderButtons addCounter={handleAddCounter} resetCounter={handleResetCounters}/>
        </header>
        <div className='counters-block'>
            {counters.map((item) => {
                return (
                    <Counter
                        onReset={handleReset}
                        onDecrement={handleDecrement}
                        onIncrement={handleIncrement}
                        key={item.id}
                        delCounter={handleDelCounter}
                        item={item}
                    />
                )
            })}
        </div>
    </div>
  );
}

export default App;
