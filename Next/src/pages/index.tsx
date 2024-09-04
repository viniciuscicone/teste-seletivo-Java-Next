import { useState } from "react";
import HierarchyInput from "../components/HierarchyInput";
import HierarchyViewComponent from "../components/HierarchyViewComponent";
import { downloadJsonFile } from "../utils/jsonUtils";

interface AnotherNode {
  name: string;
  children?: AnotherNode[];
}

interface HomeProps {
  initialHierarchy: AnotherNode[];
}

const Home: React.FC<HomeProps> = ({ initialHierarchy }) => { 
  const [hierarchy, setHierarchy] = useState<AnotherNode[]>(
    Array.isArray(initialHierarchy) ? initialHierarchy : []
  );

  const handleAddNode = (anotherNode: AnotherNode) => {
    setHierarchy([...hierarchy, anotherNode]);
  };

  const handleSave = () => {
    downloadJsonFile(hierarchy);
  };

  return (
    <div>
      <h1>Hierarquia de Palavras</h1>
      <HierarchyInput onAdd={handleAddNode} />
      <HierarchyViewComponent hierarchy={hierarchy} />
      <button onClick={handleSave}>Salvar Hierarquia</button>
    </div>
  );
};

export default Home;