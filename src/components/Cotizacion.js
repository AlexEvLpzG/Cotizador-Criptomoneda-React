import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;

    span {
        font-weight: bold;
    }
`;

const Precio = styled.p`
    font-size: 30px;

    span {
        font-weight: bold;
    }
`;
export const Cotizacion = ({ resultado }) => {

    if( Object.keys( resultado ).length === 0) return null;
    return (
        <ResultadoDiv>
            <Precio>El precio es de: <span>{ resultado.PRICE }</span></Precio>
            <Info>Precio más alto del dia es de: <span>{ resultado.HIGHDAY }</span></Info>
            <Info>Precio más bajo del dia es de: <span>{ resultado.LOWDAY }</span></Info>
            <Info>Variación últimas 24 horas es de: <span>{ resultado.CHANGEPCT24HOUR }</span></Info>
            <Info>Última Actualizacion es de: <span>{ resultado.LASTUPDATE }</span></Info>
        </ResultadoDiv>
    )
}

Cotizacion.propTypes = {
    resultado: PropTypes.object.isRequired
}