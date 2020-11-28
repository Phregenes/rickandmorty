import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';

const ComponentLanding = () => {
  return (
     <div className="ComponentLanding">
      <img className="logo" src={Logo} />
      <div className="btn">
        <Link to="/home">
          <button type="button" className="btn1">
            SIM
          </button>
        </Link>
        <a className="btn" href="https://capricho.abril.com.br">
          <button className="btn2">
            NAO
          </button>
        </a>
      </div>
    </div>
  );
}

export default ComponentLanding;
