import React from "react";
import style from "./Botao.module.scss";

// class Botao extends React.Component<{texto: string}> {

interface IProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}
class Botao extends React.Component<IProps> {
  render() {
    const { type = "button" } = this.props;

    return (
      <button type={type} className={style.botao}>
        {this.props.children}
      </button>
    );
  }
}

export default Botao;
