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

let json = {
  "action": "https://example.org",
  "method": "POST",
  "sections": [
  {
    "title": "What is your name?",
    "items": [
      {
        "type": "text",
        "name": "firstName",
        "label": "first name"
      },
      {
        "type": "text",
        "name": "lastName",
        "label": "last name"
      }
    ]
  },
  {
    "title": "What is your email?",
    "items": [
      {
        "type": "email",
        "name": "email",
        "value": "email",
        "placeholder": "email",
        "label": "email",
        "description": "Email",
        "required": true
      },
    ]
  },
  {
    "title" : "What categories are you interested in?",
    "items" : [
    {
      "type": "checkbox",
      "name": "checkbox",
      "description": "Checkbox",
      "required": true,
      "options": [
        {
          "label": "a",
          "value": 1
        },
        {
          "label": "b",
          "value": 2
        },
        {
          "label": "c",
          "value": 3
        }
      ]
    },
    ]
  },
  {
    "title": "When were you born?",
    "items": [
      {
        "type": "date",
        "name": "date",
        "value": "date",
        "placeholder": "date",
        "label": "date",
        "description": "Date",
        "required": true,
        "condition": {
          "index": 0,
          "value": ["2"]
        }
      }
    ]
  },
  {
    "title": "These are examples of other input types:",
    "items": [
      {
        "type": "file",
        "name": "file",
        "label": "file",
        "description": "File",
        "required": true,
        "condition": {
          "index": 2,
          "value": "test"
        }
      },
      {
        "type": "radio",
        "description": "Radio",
        "options": [
          {
            "name": "radio",
            "label": "a",
            "value": 1
          },
          {
            "name": "radio",
            "label": "b",
            "value": 2,
            "checked": true
          },
          {
            "name": "radio",
            "label": "c",
            "value": 3
          }
        ]
      },
      {
        "type": "range",
        "description": "Range",
        "label": "range",
        "min": 0,
        "max": 100,
        "step": 5
      },
      {
        "type": "select",
        "name": "select",
        "description": "Select",
        "label": "select",
        "options": [
          {
            "label": "a",
            "value": 1
          },
          {
            "label": "b",
            "value": 2
          },
          {
            "label": "c",
            "value": 3
          }
        ]
      },
      {
        "type": "url",
        "name": "url",
        "value": "url",
        "placeholder": "url",
        "label": "url",
        "description": "URL",
        "required": true
      }
    ],
  }
  ]
}

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
