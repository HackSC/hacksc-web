/**
*
* SelectForm
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';

let Label = styled.label`
    color: black;
    display: block;
`

let Select = styled.select`
    border-width: 1px;
    border-color: #E0E0E0;
    border-style: solid;
    box-shadow: 3px 3px #E0E0E0;
    width: 300px;
    height: 50px;
    color: black;
`

let Option = styled.option`

`

let Container = styled.div`

`

function SelectForm(props) {

    let options = props.data.options.map((option, index) => {
        return <Option key={index} label={option.label} value={option.value}/>
    })

    return (
        <Container>
            <Label>{props.data.label}</Label>
            <Select>
            {options}
            </Select>
        </Container>

    );
}

SelectForm.propTypes = {

};

export default SelectForm;
