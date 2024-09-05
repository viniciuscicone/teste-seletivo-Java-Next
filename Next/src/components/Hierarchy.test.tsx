import { render, screen, fireEvent } from '@testing-library/react';
import Hierarchy from './Hierarchy';

describe('Hierarchy', () => {
  it('deve adicionar um nível principal', () => {
    render(<Hierarchy />);
    const input = screen.getByPlaceholderText('Nome do nível');
    fireEvent.change(input, { target: { value: 'animais' } });
    fireEvent.click(screen.getByText('Criar Nível Principal'));
    expect(screen.getByText('animais')).toBeInTheDocument();
  });

  it('deve adicionar strings a um subnível', () => {
    render(<Hierarchy />);
    const input = screen.getByPlaceholderText('Nome do nível');
    fireEvent.change(input, { target: { value: 'animais' } });
    fireEvent.click(screen.getByText('Criar Nível Principal'));

    window.prompt = jest.fn().mockReturnValueOnce('animais').mockReturnValueOnce('cavalo, macaco');
    fireEvent.click(screen.getByText('Adicionar Strings em um subnível'));
    expect(screen.getByText('cavalo')).toBeInTheDocument();
    expect(screen.getByText('macaco')).toBeInTheDocument();
  });

  it('deve adicionar subníveis', () => {
    render(<Hierarchy />);
    const input = screen.getByPlaceholderText('Nome do nível');
    fireEvent.change(input, { target: { value: 'animais' } });
    fireEvent.click(screen.getByText('Criar Nível Principal'));

    window.prompt = jest.fn().mockReturnValueOnce('animais').mockReturnValueOnce('mamíferos');
    fireEvent.click(screen.getByText('Adicionar Subnível'));
    expect(screen.getByText('mamíferos')).toBeInTheDocument();
  });
});
