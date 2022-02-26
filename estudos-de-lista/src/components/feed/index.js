import React, { Component } from "react";

class Feed extends React.Component {
  render() {
    return (
      <div key={this.props.atributes.id}>
        <h3>{this.props.atributes.username}</h3>
        <ul>
          <li>Comentarios : {this.props.atributes.comentarios}</li>
          <li>Curtidas : {this.props.atributes.curtidas}</li>
        </ul>
      </div>
    );
  }
}
export default Feed;
