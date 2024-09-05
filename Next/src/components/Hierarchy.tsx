import { useState } from "react";
import styles from "../styles/Home.module.css";
import HierarchyViewComponent from "./HierarchyViewComponent";
import { downloadJsonFile } from "../utils/jsonUtils";

interface AnotherNode {
  name: string;
  children?: (AnotherNode | string)[];
}

const Hierarchy: React.FunctionComponent = () => {

  
  const [name, setName] = useState("");
  const [hierarchy, setHierarchy] = useState<AnotherNode[]>([]);
  const [parentPath, setParentPath] = useState<string[]>([]);

  const handleAddNode = (nodeNames: string[], parentName: string | null) => {
    const addNode = (nodes: (AnotherNode | string)[], parentName: string | null): (AnotherNode | string)[] => {
      if (!parentName) {
        return [...nodes, ...nodeNames.map(name => ({ name, children: [] }))];
      }
      return nodes.map((node) => {
        if (typeof node === "object" && node.name === parentName) {
          return {
            ...node,
            children: [...(node.children || []), ...nodeNames.map(name => ({ name, children: [] }))],
          };
        }
        if (typeof node === "object" && node.children) {
          return {
            ...node,
            children: addNode(node.children, parentName),
          };
        }
        return node;
      });
    };

    setHierarchy(addNode(hierarchy, parentName) as AnotherNode[]);
  };

  const findNode = (nodes: (AnotherNode | string)[], name: string): AnotherNode | null => {
    for (const node of nodes) {
      if (typeof node === "object" && node.name === name) {
        return node;
      }
      if (typeof node === "object" && node.children) {
        const found = findNode(node.children, name);
        if (found) {
          return found;
        }
      }
    }
    return null;
  };

  const handleAddStringsToChildren = () => {
    const parentName = prompt("Nome do nível onde adicionar strings:");
    if (!parentName) return;

    const parentNode = findNode(hierarchy, parentName.toLowerCase());
    if (!parentNode) {
      alert("Nível não encontrado!");
      return;
    }

    const stringsToAdd = prompt("Strings a serem adicionadas (separadas por vírgula):");
    if (stringsToAdd) {
      const stringsArray = stringsToAdd.split(",").map(str => str.trim().toLowerCase());
      parentNode.children = [...(parentNode.children || []), ...stringsArray];
      setHierarchy([...hierarchy]);
    }
  };

  const handleAddChild = () => {
    const parentName = prompt("Nome do nível onde adicionar subníveis:");
    if (!parentName) return;

    const parentNode = findNode(hierarchy, parentName.toLowerCase());
    if (!parentNode) {
      alert("Nível não encontrado!");
      return;
    }

    const childNames = prompt("Nomes dos subníveis (separados por vírgula):");
    if (childNames) {
      const namesArray = childNames.split(",").map(name => name.trim().toLowerCase());
      handleAddNode(namesArray, parentName.toLowerCase());
    }
  };

  const handleSubmit = () => {
    handleAddNode([name.toLowerCase()], null);
    setName("");
    setParentPath([]);
  };

  const handleSave = () => {
    downloadJsonFile(hierarchy);
  };

  return (
    <div className={styles.container}>
      <input  
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome do nível"
        className={styles.input}
      />
      <button className={styles.button} onClick={handleAddStringsToChildren}>Adicionar Strings em um subnível</button>
      <button onClick={handleAddChild} className={styles.button}>
        Adicionar Subnível
      </button>
      <button onClick={handleSubmit} className={styles.button}>
        Criar Nível Principal
      </button>
      <HierarchyViewComponent hierarchy={hierarchy} />
      <button onClick={handleSave} className={styles.button}>
        Salvar Hierarquia
      </button>
    </div>
  );
};

export default Hierarchy;
