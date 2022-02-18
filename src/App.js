import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <form>

        <label>
          Name Song:
          <input
            type="text" />
        </label>

        <label>
          Artist:
          <input></input>
        </label>

      </form>
    </div>
  );
}

export default App;
