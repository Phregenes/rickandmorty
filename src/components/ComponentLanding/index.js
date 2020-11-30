import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';

const ComponentLanding = () => {
  return (
     <div className="ComponentLanding">

      <Link to="/home">
        <img className="logo" src={Logo} />
        </Link>

    </div>
  );
}

export default ComponentLanding;
