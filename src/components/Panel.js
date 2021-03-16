import React from 'react';
import PropTypes from 'prop-types';

const styles = {
outline: '1px solid tomato'
}

const Panel = ({title, children}) =>
    <div style={styles}>
        <h2>{title }</h2>
         {children}
        </div>

export default Panel;