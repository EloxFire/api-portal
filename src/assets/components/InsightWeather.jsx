import React, { Component } from 'react';
import '../sass/home.scss';

class InsightWeather extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  }

  fetchMarsWeather(){
    fetch("https://api.nasa.gov/insight_weather/?api_key=S5ZmdJd4QUWBRfT5Yjgjg8PDv2BZQJeMmxqwxZWm&feedtype=json&ver=1.0")
    .then(res => res.json())
    .then(res => this.setState({
      data: res
    }));
  }

  componentDidMount(){
    this.fetchMarsWeather();
  }

  render(){
    const data = this.state.data;

    return(
      <div className="mt-3 col-12 d-flex flex-row">

        <div className="col-4">
          <h5>Mars general informations :</h5>
          <div className="d-flex flex-column">
            infos
            {data.map(function(item, index){
              return <p key={index}>{item}</p>
            })}
          </div>
        </div>

        <div className="col-4"></div>

        <div className="col-4"></div>

      </div>
    )
  }
}

export default InsightWeather;
