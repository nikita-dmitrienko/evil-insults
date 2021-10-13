import { render, screen } from '@testing-library/react';
import App from './App';

test('title is rendered', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Tailwind/i);
  expect(linkElement).toBeInTheDocument();
});
