/**
*
* Buttons
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';


const MainButton = styled.button`
    appearance: none;
    outline: none;
    border: 0;
    cursor: pointer;
    text-transform: uppercase;
    padding: 5px 10px;
    background-color: #FFFA00;
    color: #0BDDEF;

    &:hover {
        color: #F9728D;
    }
`;

function Button(props) {

    return (
      <MainButton>{props.message}</MainButton>
    );
}

Button.propTypes = {
    message: React.PropTypes.string
};


export default Button;
