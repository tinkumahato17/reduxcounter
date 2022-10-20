import React from 'react'
import "./App.css"
import { useSelector, useDispatch } from 'react-redux';
import { inNumber, deNumber } from './actions/index';

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (

    <>
      <div className="container">
        <h1>welcome to react</h1>
        <h4>Increament/Decreament in React</h4>
        <div className="quantity">
          <a className="quantity_minus" title='Decrement' onClick={() => dispatch(deNumber(5))} ><span> - </span></a>
          <input name="quantity" type="text" class="quantity_input" value={myState} />
          <a className="quantity_plus" title='Increment' onClick={() => dispatch(inNumber(5))}><samp> + </samp></a>
        </div>
      </div>


    </>

  )
}

export default App