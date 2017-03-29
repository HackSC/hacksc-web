/*
 *
 * InterestPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import FormGenerator from 'components/FormComponents/FormGenerator';

let json = {
  "action": "https://example.org",
  "method": "POST",
  "items": [
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
    },
    {
      "type": "email",
      "name": "email",
      "value": "email",
      "placeholder": "email",
      "label": "email",
      "description": "Email",
      "required": true
    },
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
  ]
}

export class InterestPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="InterestPage"
          meta={[
            { name: 'description', content: 'Description of InterestPage' },
          ]}
        />
        <FormGenerator json={JSON.stringify(json)}/>
      </div>
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
