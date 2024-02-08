import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/reducers/count';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const isShowCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = (value = 1) => {
    dispatch(counterActions.increment(value));
  };

  const decrementHandler = (value = 1) => {
    dispatch(counterActions.decrement(value));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShowCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button type="button" onClick={() => incrementHandler()}>
          Increment
        </button>
        <button type="button" onClick={() => incrementHandler(5)}>
          Increment By 5
        </button>
        <button type="button" onClick={() => decrementHandler()}>
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// import { Component } from 'react';

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button type="button" onClick={() => this.incrementHandler()}>
//             Increment
//           </button>
//           <button type="button" onClick={() => this.decrementHandler()}>
//             Decrement
//           </button>
//         </div>
//         <button onClick={() => this.toggleCounterHandler()}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
