import { useState } from "react";
import { downloadJsonFile } from '../utils/jsonUtils';

interface HomeProps {
    initialHierarchy: Node[];
  }
  
  const Home: React.FC<HomeProps> = ({ initialHierarchy }) => {
    const [hierarchy, setHierarchy] = useState(initialHierarchy);
  
    const handleAddNo = (newHierarchy: Node) => {
      setHierarchy([...hierarchy, newHierarchy]);
    };
  
    const handleSave = () => {
      downloadJsonFile(hierarchy);
    };
  
    return (
      <div>
        <h1>Hierarquia de Palavras</h1>
    
        <button onClick={handleSave}>Salvar Hierarquia</button>
      </div>
    );
  };
  export default Home;