import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Jammming header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Jammming/i);
  expect(headerElement).toBeInTheDocument();
});
