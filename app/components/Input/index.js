/**
*
* Input
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const MainInput = styled.input`
  color: ${props => props.invalid ? '#F9728D' : 'inherit'};
`;

const Label = styled.p`

`

function Input(props) {
  return (
    <div>
        <Label>{props.label}</Label>
        <MainInput placeholder={props.placeholder}/>
    </div>
  );
}

Input.propTypes = {

};

export default Input;
