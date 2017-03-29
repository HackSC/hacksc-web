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
import Button from 'components/Button'

let Form = styled.form`
    width: 800px;
    background-color: white;
    box-shadow: 5px 8px #FFFA00;
    padding: 50px;
`

let Container = styled.div`
    margin: 20px;
`

let SectionContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

let Label = styled.p`
    color: black;
    font-size: 20px;
`

let Submit = styled(Button)`
    display: inline-block;
    float: right;
`


class FormGenerator extends React.Component {
  render() {
        return (
            <Container>
                <Form action={this.props.json.action} method={this.props.json.method} encType="multipart/form-data">
                    {this._generate(this.props.json)}
                    <Submit handleRoute={() => console.log('submit!')} message={"Submit"} />
                </Form>
            </Container>
        );
    }

    _generate(json) {

        if (!json)
            return;

        return json.sections.map((section, i) => {

            let items = section.items.map((item, index) => {
                let type = item.type;
                switch (type) {
                    case "checkbox":
                        return <TickForm key={index} data={item}/>
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
                        return <InputForm key={index} data={item}/>;
                }
            });
            return (
                <Container key={i}>
                    <Label>{section.title}</Label>
                    {items}
                </Container>
            )
        });
    }
}

FormGenerator.propTypes = {

};

export default FormGenerator;
