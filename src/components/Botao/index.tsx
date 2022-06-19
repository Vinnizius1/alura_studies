import React from "react";
import style from "./Botao.module.scss";

// class Botao extends React.Component<{texto: string}> {

interface IProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}
class Botao extends React.Component<IProps> {
  render() {
    const { type = "button", children } = this.props;

    // return (
    //   <button type={this.props.type} className={style.botao}>
    //     {this.props.children}
    //   </button>
    // );
    return (
      <button type={type} className={style.botao}>
        {children}
      </button>
    );
  }
}

export default Botao;
