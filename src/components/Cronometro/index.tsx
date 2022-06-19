import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";

export default function Cronometro() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      {/* Exemplo de "props.children", que ao contrário das outras props, é escrita dentro do componente,
        "abrindo" e "fechando" a tag como em uma tag HTML. */}
      <Botao>Começar!</Botao>
    </div>
  );
}
