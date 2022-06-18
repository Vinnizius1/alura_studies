import style from "../../Lista/Lista.module.scss";

function Item({ tarefa, tempo }: { tarefa: string; tempo: string }) {
  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}

export default Item;
