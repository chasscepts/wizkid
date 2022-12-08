import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Wizkid', () => {
  render(<App />);
  const linkElement = screen.getByText(/Wizkid/i);
  expect(linkElement).toBeInTheDocument();
});
