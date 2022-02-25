import React, { Component } from "react";

class Member extends Component {
  constructor(props){
      super(props);
      this.state = {
          nome: props.nome
      };
      this.entrar = this.entrar.bind(this);
  }
  entrar(){
    this.setState({nome:"Rennan"})
}
    render() {
    return (<div>
        Bem-vindo {this.state.nome}
        <br/>        <button onClick={this.entrar}>
            Entrar como {this.state.nome}
        </button>
        <button onClick={()=> this.setState({nome:""})}>Sairr</button>
    </div>);
  }
}

export default Member;