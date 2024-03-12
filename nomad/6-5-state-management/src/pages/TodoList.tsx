import { useForm } from 'react-hook-form';
import styled from 'styled-components';

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  password1: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: 'sonky740@naver.com',
      firstName: 'ky',
      lastName: 'son',
      userName: 'sonky',
      password: '',
      password1: '',
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        'password1',
        {
          message: 'Password should be same',
        },
        {
          shouldFocus: true,
        }
      );
    }
    // setError('extraError', {
    //   message: 'Server offline',
    // });
  };

  const emailRegister = register('email', {
    required: 'Email is required',
    pattern: {
      value: /^[A-Za-z0-9._%+-]+@naver.com$/,
      message: 'Only naver.com emails allowed',
    },
  });

  const firstNameRegister = register('firstName', {
    required: 'write here',
    validate: {
      noKy: (value) => value.includes('ky') || 'First Name should include ky',
      noNico: (value) => !value.includes('nico') || 'Nico is not allowed',
    },
  });

  const lastNameRegister = register('lastName', {
    required: 'write here',
  });

  const userNameRegister = register('userName', {
    required: 'write here',
    minLength: 5,
  });

  const passwordRegister = register('password', {
    required: 'Password is required',
    minLength: {
      value: 5,
      message: 'Password must be at least 5 characters',
    },
  });

  const password1Register = register('password1', { required: 'write here' });

  return (
    <div>
      <Form onSubmit={handleSubmit(onValid)}>
        <input {...emailRegister} placeholder="Email" />
        <span>{errors.email?.message}</span>
        <input {...firstNameRegister} placeholder="First Name" />
        <span>{errors.firstName?.message}</span>
        <input {...lastNameRegister} placeholder="Last Name" />
        <span>{errors.lastName?.message}</span>
        <input {...userNameRegister} placeholder="Username" />
        <span>{errors.userName?.message}</span>
        <input {...passwordRegister} type="password" placeholder="Password" />
        <span>{errors.password?.message}</span>
        <input {...password1Register} type="password" placeholder="Password1" />
        <span>{errors.password1?.message}</span>
        <button>Add</button>
        <span>{errors.extraError?.message}</span>
      </Form>
    </div>
  );
}

export default ToDoList;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
