import React, { Component } from 'react';

export default class ClassComponent extends Component {
    //obrigatório para componente
    render(){
        return (
            <h1>{this.props.value}</h1>
        )
    }
}
