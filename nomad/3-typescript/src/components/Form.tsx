import { useState, type FormEvent } from 'react';

export default function Form() {
  const [value, setValue] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
    value && setValue('');
  };

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setValue(value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="username"
        value={value}
        onChange={onChange}
      />
      <button>Log in</button>
    </form>
  );
}
