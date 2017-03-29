/**
*
* FormGenerator
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import TickForm from 'components/TickForm'
import InputForm from 'components/InputForm'
import SelectForm from 'components/SelectForm'
import styled from 'styled-components'

let Form = styled.form`
    width: 800px;
    background-color: white;
    box-shadow: 5px 8px #FFFA00;
    padding: 50px;
`

class FormGenerator extends React.Component {
  render() {
        return (
            <div>
                <Form action={this.props.json.action} method={this.props.json.method} encType="multipart/form-data">
                    {this._generate(this.props.json)}
                </Form>
            </div>
        );
    }

    _generate(json) {

        if (!json)
            return;

        return json.items.map((item, index) => {
            let type = item.type;
            switch (type) {
                case "checkbox":
                case "radio":
                    return <TickForm key={index} data={item}/>

                case "date":
                case "email":
                case "file":
                case "range":
                case "url":
                    return <InputForm key={index} data={item}/>;

                case "select":
                    return <SelectForm key={index} data={item}/>;

                default:
                    return null;
            }
        });
    }
}

FormGenerator.propTypes = {

};

export default FormGenerator;
