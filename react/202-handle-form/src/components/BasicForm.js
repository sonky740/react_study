import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const {
    value: firstValue,
    isValid: firstIsValid,
    hasError: firstHasError,
    valueChangeHandler: firstChangeHandler,
    inputBlurHandler: firstBlurHandler,
    reset: firstReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: lastValue,
    isValid: lastIsValid,
    hasError: lastHasError,
    valueChangeHandler: lastChangeHandler,
    inputBlurHandler: lastBlurHandler,
    reset: lastReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes('@'));

  const firstValid = !firstHasError ? 'form-control' : 'form-control invalid';
  const lastValid = !lastHasError ? 'form-control' : 'form-control invalid';
  const emailValid = !emailHasError ? 'form-control' : 'form-control invalid';

  const submitValid = firstIsValid && lastIsValid && emailIsValid;

  const formHandler = (e) => {
    e.preventDefault();

    if(!submitValid) return false;

    firstReset();
    lastReset();
    emailReset();
  };

  return (
    <form onSubmit={formHandler}>
      <div className="control-group">
        <div className={firstValid}>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            onChange={firstChangeHandler}
            onBlur={firstBlurHandler}
            value={firstValue}
          />
          {firstHasError && <p className="error-text">First Name must not be empty</p>}
        </div>
        <div className={lastValid}>
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            onChange={lastChangeHandler}
            onBlur={lastBlurHandler}
            value={lastValue}
          />
          {lastHasError && <p className="error-text">Last Name must not be empty</p>}
        </div>
      </div>
      <div className={emailValid}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailHasError && (
          <p className="error-text">Email enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!submitValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
