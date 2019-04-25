import React, { Component } from 'react';

class Informe extends Component {

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <a href="#" class="list-group-item active">Device Type</a>
                        <a href="#" class="list-group-item"><i class="fa fa-check" aria-hidden="true"></i>Desktop</a>
                        <a href="#" class="list-group-item"><i class="fa fa-check" aria-hidden="true"></i>Mobile</a>
                        <a href="#" class="list-group-item"><i class="fa fa-check" aria-hidden="true"></i>Tablet</a>
                    </div>
                    <div class="col-lg-6">
                        <a href="#" class="list-group-item active">Device Type</a>
                        <a href="#" class="list-group-item">Mobile</a>
                        <a href="#" class="list-group-item">Desktop</a>
                        <a href="#" class="list-group-item">Tablet</a>
                    </div>
                </div>
            </div>
        );
    }

}

export default Informe




