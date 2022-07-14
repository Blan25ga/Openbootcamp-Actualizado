/**
 * Ejemplo de componentede tipo clase que dispone de los
 * metodos de ciclo de vida de React
 */
import React, { Component } from 'react';
import PropTypes from 'react';


class LifeCycleExmaple extends Component {
    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR: cuando se instancia el componente');


    }

    componentWillMount() {
        console.log('WILLMOUNT: antes del montaje del componente');
    }

    componentDidMount() {
        console.log('DIDMOUNT: despues del montaje del componente, antes de pintarlo');
    }


    componentWillReceiveProps() {
        console.log('WILLRECEIVEPROPS: cuando el componente recibe props');
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Controla si el componente debe o no actualizarce
         * 
         */
        // return true / false

    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WILLUPDATE: justo antes de que el componente actualice');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DIDUPDATE: despues el componente actualiza');
    }

    componentWillUnmount() {
        console.log('WILLUNMOUNT: justo antes que el componente desmonte o desaparesca');
    }

    render() {
        return (
            <div>

            </div>
        );
    }


}
