import React, { Component } from 'react';

class Continent extends Component {

  state = {
    dataLoaded: false,
  }

//This triggers fetchData in the event that a user accesses
//a route without clicking a link.
  componentDidMount () {
    this.fetchData() 
  }

//this function is fired each time the dummy prop 'currentCountry' 
// from parent is updated.
//Called whenever new props are passed to the component, or the state is changed.
  componentWillUpdate () {
    this.fetchData() 
  }

//our API call
//We use match params for the API call
  fetchData = async () => {
    const { continentName }  = this.props.match.params
    const api_call = await fetch(`https://restcountries.eu/rest/v2/region/${continentName}`);
    const response = await api_call.json();
    this.setState ({ data: response, dataLoaded: true })
  }

render() {
let continentInfo;

  if (this.state.dataLoaded === true) {
    continentInfo = (
     <div>
     <h3>{this.props.match.params.continentName}</h3>
     <h3>Total Countries: {this.state.data.length}</h3> 
	   <ul>
	   {this.state.data.map(country => {
	   	return ( <li>{country.name}</li> )}
	   	)}
	   </ul>
    </div>)
    
  } else {
  continentInfo = <p>Loading</p>
}

return (
    <div>
      <p>{continentInfo}</p>
    </div>
  );
 };
}

export default Continent;

