import { convertHierarchyToJson, downloadJsonFile } from './jsonUtils';

const mockHierarchy = [
  { name: 'animais', children: ['cavalo', 'macaco'] },
  { name: 'plantas', children: ['árvore', 'flor'] },
];

describe('jsonUtils', () => {
  it('deve converter a hierarquia para JSON corretamente', () => {
    const result = convertHierarchyToJson(mockHierarchy);
    expect(result).toEqual({
      animais: ['cavalo', 'macaco'],
      plantas: ['árvore', 'flor'],
    });
  });

  it('deve gerar um arquivo JSON para download', () => {
    const createElementSpy = jest.spyOn(document, 'createElement');
    const clickSpy = jest.fn();
    createElementSpy.mockReturnValue({
      href: '',
      download: '',
      click: clickSpy,
    } as any);

    downloadJsonFile(mockHierarchy);

    expect(createElementSpy).toHaveBeenCalledWith('a');
    expect(clickSpy).toHaveBeenCalled();
  });
});
