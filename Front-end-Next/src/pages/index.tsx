import styles from '../styles/Home.module.css';
import Hierarchy from "../components/Hierarchy";

interface AnotherNode {
  name: string;
}

interface HomeProps {
  initialHierarchy: AnotherNode[];
}

const Home: React.FC<HomeProps> = ({ initialHierarchy }) => { 


  return (
    <div className={styles.container}>
  
      <h1 className={styles.title}>Hierarquia de Palavras</h1>
        <Hierarchy></Hierarchy>
    </div>
  );
};

export default Home;