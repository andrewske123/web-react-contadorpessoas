import React, { Component } from 'react';

export default class Contador extends React.Component {
  constructor(){

    super();  
    this.state = {
      contador:0,
    };

  }

  decrementar(){
    this.setState({
      contador: this.state.contador -1,
    
    });
  }

  incrementar(){
    this.setState({
      contador: this.state.contador +1,
    });

  }

  render() {
      return(
          <div>
            <center>

              <h1 id='contador'>Contador de Pessoas</h1>
              <h1 id='result'>{this.state.contador}</h1>

              <div>

                <button onClick={this.incrementar.bind(this)} id='soma'>+</button>
                  <br></br>
                <button onClick={this.decrementar.bind(this)} id='sub'>-</button>
                  
              </div>

              </center>
          </div>
      );
  }
}
 
