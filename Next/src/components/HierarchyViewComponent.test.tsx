import { render, screen } from '@testing-library/react';
import HierarchyViewComponent from './HierarchyViewComponent';


const mockHierarchy = [
  { name: 'animais', children: ['cavalo', 'macaco'] },
  { name: 'plantas', children: ['árvore', 'flor'] },
];

describe('HierarchyViewComponent', () => {
  it('deve renderizar a hierarquia corretamente', () => {
    render(<HierarchyViewComponent hierarchy={mockHierarchy} />);
    expect(screen.getByText('animais')).toBeInTheDocument();
    expect(screen.getByText('cavalo')).toBeInTheDocument();
    expect(screen.getByText('macaco')).toBeInTheDocument();
    expect(screen.getByText('plantas')).toBeInTheDocument();
    expect(screen.getByText('árvore')).toBeInTheDocument();
    expect(screen.getByText('flor')).toBeInTheDocument();
  });

  it('deve exibir uma mensagem de erro se a hierarquia não for um array', () => {
    render(<HierarchyViewComponent hierarchy={null as any} />);
    expect(screen.getByText('Erro: A hierarquia não é um array')).toBeInTheDocument();
  });
});
