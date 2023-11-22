import { useReducer } from 'react';

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true };
  }
  if (action.type === 'RESET') {
    return { value: '', isTouched: false };
  }
  return { value: '', isTouched: false };
};

const useInput = (validateValue) => {
  // const [enteredValue, setEnteredValue] = useState('');
  // const [isTouched, setIsTouched] = useState(false);
  const [inputState, dispatch] = useReducer(inputStateReducer, {
    value: '',
    isTouched: false,
  });

  // const valueIsValid = validateValue(enteredValue);
  // const hasError = !valueIsValid && isTouched;
  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (e) => {
    // setEnteredValue(e.target.value);
    dispatch({ type: 'INPUT', value: e.target.value, isTouched: valueIsValid });
  };

  const inputBlurHandler = (e) => {
    // setIsTouched(true);
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    // setEnteredValue('');
    // setIsTouched(false);
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
