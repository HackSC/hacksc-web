/*
 *
 * InterestPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { push } from 'react-router-redux';
import FormGenerator from 'components/FormGenerator';
import styled from 'styled-components';
import Button from 'components/Button';


let Container = styled.div `
  display: flex;
  align-items: center;
  background-image: url(${require('../../assets/bg.jpg')});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  flex-direction: column;
  overflow: auto;
`

let Background = styled.div`
`

let Title = styled.h1 `
  color: #FFFA00;
  font-size: 25px;
  display: block;
  text-align: center;
`

const BackButton = styled(Button)`
  align-self: flex-start;
  margin-left: 100px;
  width: 100px;
  height: 50px;
  margin-top: 20px;
`


export class InterestPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    let json = require("./form.json")

    return (
      <Container>
        <BackButton message={"Back"} handleRoute={() => this.props.dispatch(push('/'))} />

        <Helmet
          title="InterestPage"
          meta={[
            { name: 'description', content: 'Description of InterestPage' },
          ]}
        />
        <Title>Interest Form</Title>
        <FormGenerator json={json}/>
      </Container>
    );
  }
}



InterestPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(InterestPage);
