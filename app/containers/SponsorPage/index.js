/*
 *
 * SponsorPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Button from 'components/Button';
import styled from 'styled-components';

let Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-image: url(${require('../../assets/bg.jpg')});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

let ButtonContainer = styled.div`
  height: 100px;
  padding: 10px;
`



export class SponsorPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Container>
        <Helmet
          title="SponsorPage"
          meta={[
            { name: 'description', content: 'Description of SponsorPage' },
          ]}
        />
        <ButtonContainer>
          <Button message={"Large Companies"} handleRoute={() => console.log('hey')}/>
          <Button message={"Small Companies"} handleRoute={() => console.log('hey')}/>
        </ButtonContainer>
      </Container>
    );
  }
}

SponsorPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(SponsorPage);
