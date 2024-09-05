import styles from "../styles/Home.module.css";

interface AnotherNode {
  name: string;
  children?: (AnotherNode | string)[];
}

interface Props {
  hierarchy: AnotherNode[];
}

const HierarchyViewComponent: React.FunctionComponent<Props> = ({ hierarchy }) => {

  const listofobjects = (anotherNode: AnotherNode | string) => {
    
    if (typeof anotherNode === "string") {
      return <li key={anotherNode}>{anotherNode}</li>;
    }

    return (
      <li key={anotherNode.name}>
        {anotherNode.name}
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

  return (
    <ul className={styles.container}>
      {hierarchy.map((parameter) => listofobjects(parameter))}
    </ul>
  );
};

export default HierarchyViewComponent;
