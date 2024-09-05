interface AnotherNode {
  name: string;
  children?: (AnotherNode | string)[];
}

/**
 * Converte a hierarquia de palavras em um objeto JSON.
 * representando a hierarquia.
 */
export const convertHierarchyToJson = (hierarchy: AnotherNode[]): object => {
  const buildJson = (nodes: (AnotherNode | string)[]): object => {
    const result: any = {};
    nodes.forEach((node) => {
      if (typeof node === 'string') {
        result[node] = [];
      } else if (node.children && node.children.length > 0) {
        const childrenAreStrings = node.children.every(child => typeof child === 'string');
        if (childrenAreStrings) {
          result[node.name] = node.children;
        } else {
          result[node.name] = buildJson(node.children);
        }
      } else {
        result[node.name] = [];
      }
    });
    return result;
  };

  return buildJson(hierarchy);
};


/**
 * Gera um arquivo JSON a partir da hierarquia de palavras e permite o download.
 */
export const downloadJsonFile = (hierarchy: AnotherNode[]): void => {
  const json = JSON.stringify(convertHierarchyToJson(hierarchy), null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "hierarquia.json";
  a.click();
};
