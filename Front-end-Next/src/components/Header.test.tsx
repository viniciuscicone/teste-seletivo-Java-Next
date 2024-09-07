import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

describe('Header', () => {
  it('deve renderizar os links corretamente', () => {
    render(<Header />);

    expect(screen.getByText('Hierarchy')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Sobre')).toBeInTheDocument();
    expect(screen.getByText('Contato')).toBeInTheDocument();
  });
});
