import { render, screen } from '@testing-library/react';
import App from './App';

test('renders movies app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Movies App/i);
  expect(linkElement).toBeInTheDocument();
});
