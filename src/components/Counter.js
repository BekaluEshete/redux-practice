import classes from './Counter.module.css';
import  { useSelector, useDispatch } from 'react-redux';
import { counterAction } from '../store';

const Counter = () => {
  const counter= useSelector(state=>state.counter.counter)
  const show= useSelector(state=>state.counter.showCounter)
  const dispatch= useDispatch()
  const incrementByFiveHandler = () => {
   
    dispatch( counterAction.incrementbyfive(5)); ///always the payloads are aded like this
  
}
  const toggleCounterHandler = () => {
    dispatch( counterAction.toggle());

  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>{counter}</div>}
      <div>
        
        <button onClick={()=>dispatch(counterAction.increment())}>Increment</button>
        <button onClick={incrementByFiveHandler}>Inscrement by 5</button>
        <button onClick={()=>dispatch(counterAction.decrement())}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
