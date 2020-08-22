import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  const { getAllByText } = render(<App />);
  const linkElement = getAllByText(/Wryter/i);
  expect(linkElement).toHaveLength(4);
});
