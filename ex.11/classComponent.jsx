import React, { Component } from 'react';

export default class ClassComponent extends Component {
    constructor(props){
        super(props) // obrigatório para contrutores
        this.state = { value: props.initialValue }
    }
    
    sum(delta) {
        //{ dentro das chaves é a criação de um novo objeto}
        this.setState( {value: this.state.value + delta} )
    }
    //obrigatório para class componente
    render(){
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.sum(-1)}>Dec</button>
                <button onClick={() => this.sum(1)}>Inc</button>
            </div>
        )
    }
}
