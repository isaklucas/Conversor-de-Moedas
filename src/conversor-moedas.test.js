import { render, screen } from '@testing-library/react';
import ConversorMoedas from './conversor-moedas';

test('Deve renderizar os componetes sem erros', () => {
  render(<ConversorMoedas />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
