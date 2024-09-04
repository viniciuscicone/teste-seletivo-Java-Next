interface Node {
  name: string;
  children?: Node[];
}

/**
 * Converte a hierarquia de palavras em um objeto JSON.
 * @param hierarchy - A hierarquia de palavras.
 * @returns O objeto JSON representando a hierarquia.
 */
export const convertHierarchyToJson = (hierarchy: Node[]): object => {
  const buildJson = (nodes: Node[]): object => {
    const result: any = {};
    nodes.forEach((node) => {
      if (node.children && node.children.length > 0) {
        result[node.name] = buildJson(node.children);
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
 * @param hierarchy - A hierarquia de palavras.
 */
export const downloadJsonFile = (hierarchy: Node[]): void => {
  const json = JSON.stringify(convertHierarchyToJson(hierarchy), null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "hierarquia.json";
  a.click();
};
