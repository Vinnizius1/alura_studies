import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from "./Lista.module.scss";

// O "ITarefa" é um array de ITarefa, fácil né? Também pode ser escrito assim: Array<ITarefa>
function Lista({ tarefas }: { tarefas: ITarefa[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => {
          /*  tempo={item.tempo} tarefa={item.tarefa} */
          return <Item {...item} key={index} />;
        })}
      </ul>
    </aside>
  );
}

export default Lista;
