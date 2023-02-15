import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';

test('Initial conditions', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole('button', { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();
});

test('Checkbox enables button on first click and disables on second click', async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole('button', { name: /confirm order/i });

  await user.click(checkbox);
  expect(confirmButton).toBeEnabled();

  await user.click(checkbox);
  expect(confirmButton).toBeDisabled();
});

test('popover responds to hover', async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  // init
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // hover
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // unhover
  await user.unhover(termsAndConditions);
  expect(nullPopover).not.toBeInTheDocument();
});