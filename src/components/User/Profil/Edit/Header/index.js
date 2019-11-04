import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import PropTypes from 'prop-types';

// import './header.scss';

const Header = ({ userName, avatar }) => (
  <Row>
    <Col className="text-center mt-4 mb-4">
      <h2>Hello {userName}</h2>
      <p>Bienvenue sur l'édition de ton profil.</p>
      <Image src={avatar} alt={`Avatar du profil de ${userName}`} width="80" height="80" roundedCircle />
    </Col>
  </Row>
);

Header.propTypes = {
  userName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Header;
