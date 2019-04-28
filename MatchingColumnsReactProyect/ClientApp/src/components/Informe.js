import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Informe';

class Informe extends Component {
    componentWillMount() {
        const id = parseInt(this.props.match.params.id, 10)||0;
        let res = this.props.requestInforme(id); 
    }

    componentWillReceiveProps(nextProps) {
        // This method runs when incoming props (e.g., route params) change
        const id = parseInt(nextProps.match.params.id, 10) || 0;
        let res = this.props.requestInforme(id);
    }

    render() {
        return (
            <div className="container">
                <h1>{this.props.informedata.nombre}</h1>
                <div className="row">
                   {renderCuadros(this.props.informedata.listaDeCuadros)}
                </div>
            </div>
        );
    }
}

function renderCuadros(props) {
    if (props != undefined) {
        return (
            <div class="cuadros">
                <p>{props[0].descripcion}</p>
                {renderConectores(props[0])}
            </div>
        );
    }

}

function renderConectores(props) {
    return (
        <div class="conectores">
            <div className="col-lg-4">
                <a href="#" className="list-group-item active">Device Type</a>
                <a href="#" className="list-group-item"><i className="fa fa-check"></i>Desktop</a>
                <a href="#" className="list-group-item"><i className="fa fa-check"></i>Mobile</a>
                <a href="#" className="list-group-item"><i className="fa fa-check"></i>Tablet</a>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-4">
                <a href="#" className="list-group-item active">Device Type</a>
                <a href="#" className="list-group-item">Mobile</a>
                <a href="#" className="list-group-item">Desktop</a>
                <a href="#" className="list-group-item">Tablet</a>
            </div>
        </div>
    );
}

export default connect(
    state => state.informe,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Informe);




