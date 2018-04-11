import React, { Component } from 'react';

import { ListGroup, ListGroupItem } from 'reactstrap';

export default class CpVersao extends Component {

    render() {
        return (
            <div className="chVersao">
                <h3 className="chTituloVersao">Versao 1.0.0</h3>
                <blockquote>
                <h6>Disponibilizado em 10/04/2018</h6>
                </blockquote>
                <ul className="chAlteracoes">
                    <li>Descrição da versão 01</li>
                    <li>Descrição da versão 02</li>
                    <li>Descrição da versão 03</li>
                </ul>
            </div>
        );
    }

}
