/**
*
* Subscribe Form
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Button from 'components/Button';
import styled from 'styled-components';


const Container = styled.div`

`;

const EmailInput = styled.input`
  color: ${props => props.invalid ? '#F9728D' : 'inherit'};
`;

class Subscribe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displaySubscribe: false,
      displayConfirm: false,
      emailIsValid: true,
      displayUpdated: true,
      email: "",
    }

    this._showSubscribe = this._showSubscribe.bind(this);
    this._subscribe = this._subscribe.bind(this);
    this._inputKeyDown = this._inputKeyDown.bind(this);
    this._submitForm = this._submitForm.bind(this);
    this._postToSendgrid = this._postToSendgrid.bind(this);
  }

  _showSubscribe() {
    this.setState({
      displaySubscribe: true,
      displayUpdated: false,
    });
  }

  _subscribe(event) {
    var emailAddress = this.state.email;
    this._submitForm(emailAddress);
  }

  _inputKeyDown(event) {

    this.setState({
      email: event.target.value,
    });

    if (event.keyCode === 13) {
      this._submitForm(this.state.email);
      return;
    }

    if (!this.state.emailIsValid && this._validateEmail(this.state.email)) {
      this.setState({
        emailIsValid: true,
      });
    }
  }

  _submitForm(email) {
    if (this._validateEmail(email)) {
      this._postToSendgrid(email, () => {
        this.setState({
          displayConfirm: true,
          displaySubscribe: false,
        });
        setTimeout(() => {
          this.setState({
            displayConfirm: false,
          })
        }, 1500)
      });
    } else {
      this.setState({
        emailIsValid: false,
      })
    }
  }

  _validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      console.log(email);
      return re.test(email);
  }

  _postToSendgrid(email, cb) {
    var xhr = new XMLHttpRequest();
    var url = 'http://server.hacksc.com:5000/subscribe';
    xhr.open('POST', url, true);
    xhr.onreadystatechange = function() {//Call a function when the state changes.
      if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) cb();
    }
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify({ email }));
  }

  render() {

    var view;
    if (this.state.displaySubscribe) {
      view = (
        <div>
          <EmailInput invalid={!this.state.emailIsValid} type="email"placeholder="johndoe@usc.edu" onKeyDown={this._inputKeyDown} />
          <Button message="SUBSCRIBE" handleRoute={this._subscribe}/>
        </div>
      )
    }
    else if (this.state.displayConfirm) {
      view = <div id="subscribe-confirm">THANKS!</div>;
    }
    else if (this.state.displayUpdated) {
      view = <Button message="KEEP ME UPDATED" handleRoute={this._showSubscribe}/>;
    }

    return (
      <Container>
        {view}
      </Container>
    );
  }
}

Subscribe.propTypes = {

};

export default Subscribe;
