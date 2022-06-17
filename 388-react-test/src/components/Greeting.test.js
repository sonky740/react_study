import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders "Hello World" as a text', () => {
    // 준비
    render(<Greeting />);

    // 실행

    // 단언
    const helloWorldElement = screen.getByText('Hello World', { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see you" if the button was NOT clicked', () => {
    // 준비
    render(<Greeting />);

    // 단언
    const outputElement = screen.getByText('good to see you!', {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    // 준비
    render(<Greeting />);

    // 실행
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // 단언
    const outputElement = screen.getByText('Changed!', { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', () => {
    // 준비
    render(<Greeting />);

    // 실행
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // 단언
    const outputElement = screen.queryByText('good to see you', { exact: false });
    expect(outputElement).toBeNull();
  })
});
