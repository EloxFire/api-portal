import React, { Component } from 'react';

import '../sass/home.scss';

class Hpotd extends Component{

  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  }

  fetchPhoto(){
    fetch(`https://api.nasa.gov/planetary/apod?api_key=S5ZmdJd4QUWBRfT5Yjgjg8PDv2BZQJeMmxqwxZWm`)
      .then(res => res.json())
      .then(res => this.setState({
        data: res
      }));
  }

  componentDidMount(){
    this.fetchPhoto();
  }

  render(){
    const imageStyle = {
      maxWidth: '100%',
      margin: "0px !important",
      padding: "0px !important",
    }

    return(
      <div className="col-12 p-3 d-flex flex-column align-items-center">
        <div className="mt-2 container">
          <img style={imageStyle} src={this.state.data.hdurl} alt={this.state.data.title}/>

          <div className="mt-3">
            <h5>More informations :</h5>
            <div className="d-flex flex-row align-items-center">
              <h6 className="m-0">Image title : </h6><span className="m-0 ml-1">{this.state.data.title}</span>
            </div>
            <div className="d-flex flex-row align-items-center">
              <h6 className="m-0">Image taken on : </h6><span className="m-0 ml-1">{this.state.data.date}</span>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <h6 className="m-0">Image description : </h6><span className="m-0 ml-1">{this.state.data.explanation}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hpotd;
