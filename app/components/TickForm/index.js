/**
*
* TickForm
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';

let Label = styled.label`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

let StyledInput = styled.div `
    height: 100px;
    flex: 1 0 auto;
    display: inline-block;
    border-radius: 5px;
    border-width: 1px;
    border-color: #E0E0E0;
    border-style: solid;
    box-shadow: 3px 3px #E0E0E0;
    margin: 10px;
    transition: all .3s ease;
    color: #E0E0E0;

    & input:checked + label {
        background-color: #FFFA00;
        color: black;
    }
`

let Input = styled.input`
    display: none;
`

let Container = styled.div`
    display: flex;
    justify-content: space-around;

`

function TickForm(props) {
    let elements = props.data.options.map((option, index) => {

        if (props.data.type === 'checkbox') {
            return (
                <StyledInput key={index}>
                    <Input type={props.data.type} name={props.data.name+option.label} id={props.data.name+option.label}/>
                    <Label htmlFor={props.data.name+option.label} name={props.data.name+option.label}>{option.label}</Label>
                </StyledInput>
            )
        }
        else if (props.data.type === "radio") {
            return (
                <StyledInput key={index}>
                    <Input type={props.data.type} name={props.data.name} id={props.data.name+option.label}/>
                    <Label htmlFor={props.data.name+option.label} name={props.data.name+option.label}>{option.label}</Label>
                </StyledInput>
            )
        }
    });
    return (
        <Container>
            {elements}
        </Container>
    )
}

TickForm.propTypes = {

};

export default TickForm;
