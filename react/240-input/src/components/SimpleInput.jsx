import { validationEmail } from '../utils';
import useInput from '../hooks/use-input';

const SimpleInput = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput (value => value.trim() !== '' && validationEmail(value));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    resetNameInput();
    resetEmailInput();
  };

  const inputErrorClasses = (inputHasError) => {
    return inputHasError ? 'form-control invalid' : 'form-control';
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputErrorClasses(nameInputHasError)}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p>Name must not be empty.</p>}
      </div>
      <div className={inputErrorClasses(emailInputHasError)}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p>Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
