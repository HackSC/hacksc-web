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
    color: black;
`

let Input = styled.input`

`

let Container = styled.div`

`

function TickForm(props) {
    let elements = props.data.options.map((option, index) => {
        if (option.label) {
            return (
                <div key={index}>
                    <Label>{option.label}</Label>
                    <Input type={props.data.type} name={option.name} />
                </div>
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
