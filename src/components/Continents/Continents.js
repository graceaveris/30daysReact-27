import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import Continent from './Continent.js'

class Continents extends Component {

  state = {
   continents: [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ],
  }

//this is actually just a dummy eparam we pass to the child component
//to force an upload, and trigger the componentWillUpdate
updateContinent(continent) {
   this.setState({ currentContinent: continent })
  }

render() {
  
  {/* Each time a link is clicked, we are updating the currentCountry */}
  {/* which means the Continent component updates, as the props passed have changed */}
	let continentLinks = (
	  <div>
		 {this.state.continents.map(continent => {
	      return (
		     <Link to={`/continent/${continent}`} className="link" onClick={ () => this.updateContinent(continent) }>{continent}</Link>
		  )})}
      </div>
	)
 
 {/* Our path below direct the dom to load Continent when the route matches */}
 {/* Note how we have passed dummy prop, to trigger the child to update */}
 {/* We are passing a param :continentName which can be accesed in the child */}

 return (
	<div>
	    <div className="subnavbar">{continentLinks}</div>
	    <Route path="/continent/:continentName" render={(props) => <Continent {...props} currentContinent={this.state.currentContinent}/>}/>
	</div>
  )
 }
}

export default Continents;
