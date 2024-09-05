import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './index';

// Mock do componente Hierarchy
jest.mock('../components/Hierarchy', () => () => <div data-testid="hierarchy-component" />);

describe('Home', () => {
  it('deve renderizar o título e o componente Hierarchy corretamente', () => {
    const initialHierarchy = [{ name: 'Node1' }];

    render(<Home initialHierarchy={initialHierarchy} />);

    expect(screen.getByText('Hierarquia de Palavras')).toBeInTheDocument();
    expect(screen.getByTestId('hierarchy-component')).toBeInTheDocument();
  });
});
