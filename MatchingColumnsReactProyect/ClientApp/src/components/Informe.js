import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Informe';
import Cuadro from './Cuadro';

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
        { if (!this.props.isLoading) { <span>Loading...</span> } }
        return (
            <div className="container">
                <h1>{this.props.informedata.informeNombre}</h1>
                <div className="row">
                    {renderCuadros(this.props.informedata)}
                </div>
            </div>
        );
    }
}

function renderCuadros(informedata) {
    if (informedata.conectores != undefined) {
        return (
            <div>
                <Cuadro keys={informedata} />
                <Cuadro values={informedata} />
            </div>
        );
    }
}

export default connect(
    state => state.informe,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Informe);




