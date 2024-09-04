
import { useState } from 'react';

interface AnotherNode {
  name: string;
  children?: AnotherNode[];
}

interface Props {
  onAdd: (AnotherNode: AnotherNode) => void;
}

const HierarchyInput: React.FunctionComponent<Props> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [children, setChildren] = useState<AnotherNode[]>([]);

  const handleAddChild = () => {
    const childName = prompt('Nome do subnível:');
    if (childName) {
      setChildren([...children, { name: childName }]);
    }
  };

  const handleSubmit = () => {
    onAdd({ name, children });
    setName('');
    setChildren([]);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome do nível"
      />
      <button onClick={handleAddChild}>Adicionar Subnível</button>
      <button onClick={handleSubmit}>Salvar Nível</button>
    </div>
  );
};

export default HierarchyInput;
