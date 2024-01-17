import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  it('renders Hello World as a text', () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
  });

  it('renders Good to see you if the button was NOT clicked', () => {
    render(<Greeting />);

    const outputElement = screen.getByText('Good to see you!', {
      exact: false,
    });

    expect(outputElement).toBeInTheDocument();
  });

  it('renders Changed! if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText('good to see you', {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
