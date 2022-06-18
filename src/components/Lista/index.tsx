import Item from "./Item";

import style from "./Lista.module.scss";

function Lista() {
  const tarefas = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "01:00:00",
    },
  ];

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => {
         /*  tempo={item.tempo} tarefa={item.tarefa} */
          return (
            <Item {...item} key={index} />
          );
        })}
      </ul>
    </aside>
  );
}

export default Lista;
