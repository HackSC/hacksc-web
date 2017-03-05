/*
 * HomePage
 *
 * This is the first thing users see of HackSC, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import messages from './messages';
import Button from 'components/Button';
import Contact from 'components/Contact';
import Subscribe from 'components/Subscribe';
import styled from 'styled-components';


//create components for each div styling
//we brought this page over from static

const Container = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    min-height: 300px;
    background-image: url(${require('../../assets/bg.jpg')});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

const Title = styled.div`
    width: 80%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 20px;
`;

const Logo = styled.div`
    position: relative;
    max-width: 500px;
    font-size: 8px;
    margin: 0 auto;
`;

const LogoYellow = styled.img`
    width: 100%;
    height: auto;
    position: absolute;
    z-index: 2;
`;

const LogoShadow = styled.img`
    width: 100%;
    height: auto;
    position: relative;
    z-index: 1;
    transform: translate(1em, 1em);
`;

const SubText = styled.div`
    padding: 2em 0;
    text-transform: uppercase;
`;

export default class HomePage extends React.Component {
  render() {
    return (
        <Container>
            <Helmet
              title="HackSC Fall 2017"
              meta={[
                {
                  name: 'description',
                  content: 'Description of InterestPage'
                },
              ]}
            />
            <Title>
              <Logo>
                <LogoYellow src={require("../../assets/hacksc_yellow.svg")} alt="" />
                <LogoShadow src={require("../../assets/hacksc_shadow.svg")} alt="" />
              </Logo>
              <SubText>
                UNIVERSITY OF SOUTHERN CALIFORNIA<br />
                COMING SOON × FALL 2017
              </SubText>
              <Subscribe />
              <Contact />
            </Title>
          </Container>
    );
  }
}
