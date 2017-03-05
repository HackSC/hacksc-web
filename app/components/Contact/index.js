/**
*
* Contact
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';


const Container = styled.div`
    margin: 20px;
`;

const Link = styled.a`
    color: #fff;
    font-size: 16px;
    text-decoration: none;

    &:hover span {
        color: #F9728D;
        background-color: #FFFA00;
    }
`

function Contact() {
  return (
    <Container>
        <Link href="mailto:team@hacksc.com">email(<span>team@hacksc.com</span>);</Link>
    </Container>
  );
}

Contact.propTypes = {

};

export default Contact;
