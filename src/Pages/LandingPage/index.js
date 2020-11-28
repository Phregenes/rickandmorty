import React from 'react';
import './style.css';

import Particles from 'react-particles-js';
import ComponentLanding from '../../components/ComponentLanding';

import { particlesParams } from './constants';


const LandingPage = () =>( 
  <div className="particles"> 
    <Particles params={particlesParams} />
    <div className="componentcenter">
      <ComponentLanding />
    </div>
  </div>
)
export default LandingPage;
