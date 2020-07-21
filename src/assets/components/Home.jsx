import React, { Component } from 'react';

import '../sass/home.scss';
import ApiCard from './sub/ApiCard';

class Home extends Component{
  render(){
    return(
      <div className="col-12 p-3 d-flex flex-column align-items-center">
        <h1 className="purple">api portal</h1>

        <div className="apiCardContainer container d-flex flex-wrap justify-content-center overflow-auto mt-5">
          <ApiCard apiName="HPOTD" apiSubtitle="Hubble Photo Of The Day" apiDescription="Show nasa's photo of the day, took by the Hubble telescope." apiLink="/hpotd" apiDocsLink="api.nasa.gov"/>
        </div>
      </div>
    )
  }
}

export default Home;