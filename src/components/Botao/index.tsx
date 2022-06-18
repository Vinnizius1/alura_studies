import React from "react";
import style from "./Botao.module.scss";

// class Botao extends React.Component<{texto: string}> {

interface IProps {
  children: React.ReactNode;
}
class Botao extends React.Component<IProps> {
  render() {
    return <button className={style.botao}>{this.props.children}</button>;
  }
}

export default Botao;
