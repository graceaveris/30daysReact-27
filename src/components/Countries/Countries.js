//This component and children are basically just copies of continent component and children.
//repetition of code - should be refractored and combined.

import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import Country from './Country.js'

class Countries extends Component {

  state = {
   countries: [ 'Germany', 'Spain', 'France', 'Mexico', 'Mexico', 'Chile', 'Kenya' ],
  }

updateCountry(country) {
   console.log(country)
   this.setState({ currentCountry: country })
  }

render() {

	let countryLinks = (
	  <div>
		 {this.state.countries.map(country => {
	      return (
		     <Link to={`/country/${country}`} className="link" onClick={ () => this.updateCountry(country) }>{country}</Link>
		  )})}
      </div>
	)

 return (
	<div>
	    <div className="subnavbar">{countryLinks}</div>
	    <Route path="/country/:countryName" render={(props) => <Country {...props} currentCountry={this.state.currentCountry}/>}/>
	</div>
  )
 }
}

export default Countries;
