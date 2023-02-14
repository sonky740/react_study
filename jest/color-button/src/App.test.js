import { render, screen, fireEvent } from '@testing-library/react';
// import { logRoles } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  // click button - 시험삼아 하나의 유닛테스트에서 여러 단언문을 사용해보았다.
  // 하나의 유닛테스트에서 여러 단언문을 사용하면 하나의 단언문이 실패하더라도 전체 테스트가 실패하게 된다.
  // fireEvent.click(colorButton);

  // // expect the background color to be blue
  // expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // // expect the button text to be 'Change to red'
  // expect(colorButton.textContent).toBe('Change to red');
});

// 유닛 테스트에서는 하나의 테스트에 하나의 단언문만 사용하는 것이 좋다.
test('button turns blue when clicked', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  expect(colorButton.textContent).toBe('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unckecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('checkbox disables button on first click and enables on second click', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: 'Medium Violet Red' });
});

// 테스트 결합 - 테스트를 하나의 테스트로 결합하는 것
describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
