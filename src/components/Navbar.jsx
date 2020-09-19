import React from 'react';
import '../sass/styles.scss';
import logoEA from '../img/ea.svg';

interface NavbarProps{
  services: String[],
  pservices: String[]
}

const Navbar: React.FC<NavbarProps> = ({services, pservices}) => (
  <div id="navbar" className="col-lg-2 d-flex flex-column p-3">
    <div className="navbar-header d-flex flex-row align-items-center">
      <img className="p-0 m-0" className="navbar-logo" src={logoEA} alt="Enzo Avagliano Logo"/>
      <h2 className="p-0 m-0 ml-3">API Portal</h2>
    </div>
    <div className="navbar-body d-flex flex-lg-column justify-content-center">
      <div className="p-2">
        <h5>My services</h5>
        <ul>
          {services.map(function(item, index){return(<li><a key={index} href={`/${item.toLowerCase().replace(/\s/g, '')}`}>{item}</a></li>)})}
        </ul>
      </div>
      <div className="p-2">
        <h5>Public services</h5>
        <ul>
          {pservices.map(function(item, index){return(<li><a key={index} href={`/${item.toLowerCase().replace(/\s/g, '')}`}>{item}</a></li>)})}
        </ul>
      </div>
    </div>
    <div className="navbar-footer p-2 text-center">
      <hr style={{backgroundColor:"#f5f6fa"}} className="p-0 mb-3 mt-3 ml-0 mr-0"/>
      <h6 style={{fontSize:"12px"}}>© Enzo Avagliano - All right reserved</h6>
      <h6 style={{fontSize:"12px"}}>2020</h6>
    </div>
  </div>
)

export default Navbar;
