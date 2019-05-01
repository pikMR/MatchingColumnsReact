import React, { Component } from "react";
import "../App.css";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as utils from "../Utils.js";
import { actionCreators } from '../store/Cuadro';

class Cuadro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isok: false,
            conectorlap: []
        }
    }

  componentWillMount() {}

  onDragOver = ev => {
    ev.preventDefault();
  };

    onDragStart = (ev, text, id, array) => {
        // soltamos elemento en el cuadro y guardamos sus valores para el drop.
          ev.dataTransfer.dropEffect = "move";
          ev.dataTransfer.setData("text", text);
          ev.dataTransfer.setData("id", id);
        // obtenemos posición correspondiente en array al hacer drag
          let elementPos = array.map(function (e) { return e.Value[0].Id; }).indexOf(id);
          ev.dataTransfer.setData("position", elementPos);
    };

    onDrop = (ev, position) => {
        // en el drop obtenemos los datos y realizamos un swap del array, recargamos con setState.

        let id = ev.dataTransfer.getData("id");
        let selectedpos = ev.dataTransfer.getData("position");
        let destinopos = ev.target.attributes.index.value;

     /*   this.state.conectorlap.push(
            {
                initialtext: ev.dataTransfer.getData("text"),
                initialid: id,
                initialpos: selectedpos,
                destinopos: destinopos
            }
        );
*/
        utils.swapArrayElements(this.props.values.conectores, selectedpos, destinopos);
        var isok = this.props.validaCuadro();

        this.setState({ conectorlap: this.state.conectorlap , isok: isok });
    }

    render() {
      // Por serparado primero las keys y luego los valores.

    if (this.props.keys != undefined) {
      return (
        <div className="container-drag col-lg-4 ">
          <a className="header list-group-item active">
            {this.props.keys.cuadroTema1}
          </a>
          {this.props.keys.conectores.map((obj,i) => (
                  <div key={obj.Key.Id} className="wip">
                      <span>{i}</span>
              <a className="list-group-item">
                <i className="fa fa-check" />
                {obj.Key.Datos}
              </a>
            </div>   
              ))
           }
          </div>
         
      );
    } else if (this.props.values != undefined) {
      return (
        <div
            className="container-drag col-lg-4"
            onDragOver={e => this.onDragOver(e)}
            onDrop={(e)=>this.onDrop(e,"changed")}
        >
            <a className="header list-group-item active">
            {this.props.values.cuadroTema2}
          </a>
          {this.props.values.conectores.map((obj,index) => (
            <div
              key={obj.Value[0].Id}
              draggable
              onDragStart={e => this.onDragStart(e, obj.Value[0].Datos,obj.Value[0].Id,this.props.values.conectores)}
                  >
               <span className="numberValues">{index}</span>
                <a index={index} className="list-group-item task-header">
                <i className="fa fa-check" />
                {obj.Value[0].Datos}
              </a>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default connect(
    state => state.cuadro,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Cuadro);

