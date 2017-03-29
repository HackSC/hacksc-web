/**
*
* InputForm
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';


let Label = styled.label`
    display: block;
    color: black;
`

let TextInput = styled.input`
    display: block;
    width: 300px;
    height: 50px;
    background-color: white;
    color: black;
    border-width: 1px;
    border-color: #E0E0E0;
    border-style: solid;
    box-shadow: 3px 3px #E0E0E0;

    &:focus {
        outline: none !important;
        border-width: 2px;
        border-color: #0BDDEF;
        border-style: solid;
    }
`

let Input = styled.input`

`

let FileInput = styled.input`

`

let Container = styled.div`
    padding: 10px;
`

function InputForm(props) {
    //all text types
    if (props.data.type === 'email' || props.data.type === 'url' || props.data.type === 'text' || props.data.type === 'date') {
        return (
            <Container>
                <Label>{props.data.label}</Label>
                <TextInput type={props.data.type}/>
            </Container>
        )
    }
    else if (props.data.type === 'file') {
        return (
            <Container>
                <Label>{props.data.label}</Label>
                <FileInput type={props.data.type}/>
            </Container>
        )
    }

    //all other input types
    return (
        <Container>
            <Label>{props.data.label}</Label>
            <Input type={props.data.type}/>
        </Container>
    )
}

InputForm.propTypes = {

};

export default InputForm;
