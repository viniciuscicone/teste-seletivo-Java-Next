import styles from "../styles/Home.module.css";

interface AnotherNode {
  name: string;
  children?: AnotherNode[];
}

interface Props {
  hierarchy: AnotherNode[];
}

const HierarchyViewComponent: React.FunctionComponent<Props> = ({
  hierarchy,
}) => {
  const render = (anotherNode: AnotherNode) => (
    <li key={anotherNode.name}>
      {anotherNode.name}
      {anotherNode.children && (
        <ul className={styles.subnivel} >{anotherNode.children.map((child) => render(child))}</ul>
      )}
    </li>
  );

  if (!Array.isArray(hierarchy)) {
    return <div>Erro: A hierarquia não é um array.</div>;
  }

  return (
    <ul className={styles.container}>
      {hierarchy.map((parameter) => render(parameter))}
    </ul>
  );
};

export default HierarchyViewComponent;
