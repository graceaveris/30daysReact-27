
//This component and parent are basically just copies of continent component and children.
//repetition of code - should be refractored and combined.

import React, { Component } from 'react';

class Country extends Component {

  state = {
    dataLoaded: false,
  }

  componentDidMount () {
    this.fetchArticles() 
  }

//fires the function before updating
  componentWillUpdate () {
    this.fetchArticles() 
  }

//need an if else here, if current country exists, we use it, otherwise we pull form params?
  fetchArticles = async () => {
    const { countryName }  = this.props.match.params
    const api_call = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);
    const response = await api_call.json();
    this.setState ({ articles: response, dataLoaded: true })
  }

render() {

 let countryInfo;

  if (this.state.dataLoaded === true) {
    countryInfo = (
     <div>
     <h3>{this.state.articles[0].name}</h3>
      <p>Capital City: {this.state.articles[0].capital}</p>
      <p>Primary Language: {this.state.articles[0].languages[0].name}</p>
      <p>Currency: {this.state.articles[0].currencies[0].name}</p>
     </div>
     )
    } else {
      countryInfo = <p>Loading</p>
    }


 return (
    <div>
      <p>{countryInfo}</p>
    </div>
  );
 };
}

export default Country;


