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
            <div className="col-lg-4 ">
                    <a href="#" className="list-group-item active">{informedata.cuadroTema1}</a>
                {
                    informedata.conectores.map(obj =>
                        <div key={obj.Key.Id}>
                            <a href="#" className="list-group-item"><i className="fa fa-check"></i>{obj.Key.Datos}</a>
                        </div>
                    )
                }
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-4 ">
                    <a href="#" className="list-group-item active">{informedata.cuadroTema2}</a>
                {
                    informedata.conectores.map(obj =>
                        <div key={obj.Value[0].Id}>
                            <a href="#" className="list-group-item"><i className="fa fa-check"></i>{obj.Value[0].Datos}</a>
                        </div>
                    )
                }
            </div>
        </div>
        );
    }
}

export default connect(
    state => state.informe,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Informe);




