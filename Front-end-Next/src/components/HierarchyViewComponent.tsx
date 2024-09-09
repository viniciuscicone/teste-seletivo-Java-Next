import styles from "../styles/Home.module.css";

interface AnotherNode {
  name: string;
  children?: (AnotherNode | string)[];
}

interface Props {
  hierarchy: AnotherNode[];
}

const HierarchyViewComponent: React.FunctionComponent<Props> = ({
  hierarchy,
}) => {
  // Função recursiva para renderizar a hierarquia de nós
  const listofobjects = (anotherNode: AnotherNode | string) => {
    if (typeof anotherNode === "string") {
      return <div className={styles.divCard}><li key={anotherNode}>{anotherNode}</li></div>;
    }

    return (
      
      <li className={styles.hierarchyCard} key={anotherNode.name}>
        <div className={styles.divCard}>{anotherNode.name}</div>

        {anotherNode.children && (

            <ul className={styles.subnivel}>
              {anotherNode.children.map((child) => listofobjects(child))}
            </ul>
          
        )}
      </li>
    );
  };

  if (!Array.isArray(hierarchy)) {
    return <div>Erro: A hierarquia não é um array</div>;
  }

  return <div className={styles.bodyCards} >{hierarchy.map((parameter) => listofobjects(parameter))}</div>;
};

export default HierarchyViewComponent;
