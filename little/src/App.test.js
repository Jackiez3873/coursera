import { render, screen } from '@testing-library/react';
import App from './App';
import Main from './Main';
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Booking Form', () => {
  render(<Booking Form />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
