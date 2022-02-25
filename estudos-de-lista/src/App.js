import React, { Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {id:1,username:'matheus', curtidas:10 , comentarios:2},
        {id:2,username:'Rennan',curtidas:20, comentarios:3},
        {id:3,username:'Aline',curtidas:20, comentarios:3},
        {id:4,username:'ariane',curtidas:45, comentarios:4}
      ]
    }
  }

  render() {
    return (
      <div>

        {this.state.feed.map((item)=> {return (
          <div>
            <h3>{item.username}</h3>
            <ul>
              <li>Comentarios : {item.comentarios}</li>
              <li>Curtidas : {item.curtidas}</li>
            </ul>
          </div>
        )})}
      </div>
    )
  }
}

export default App;
