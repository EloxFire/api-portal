import React from 'react';

function ApiCard(props){

  const cardStyle = {
    width: "18rem",
  }
  return(
    <div class="card m-3" style={cardStyle}>
      <div class="card-body">
        <h5 class="card-title">{props.apiName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{props.apiSubtitle}</h6>
        <p class="card-text">{props.apiDescription}</p>
        <a href={props.apiLink} class="card-link">Go to service</a>
        <a href={props.apiDocsLink} class="card-link">Service docs</a>
      </div>
    </div>
  )
}

export default ApiCard;
