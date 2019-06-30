import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {

 return (

    <div className="navbar">

	    <NavLink exact className="navlink"
	      activeClassName="activelink" 
	      to="/"> Home 
	    </NavLink>

	    <NavLink className="navlink" 
	      activeClassName="activelink"
	      to="/country">Countries
	    </NavLink>

	    <NavLink className="navlink" 
	      activeClassName="activelink"
	      to="/continent">Continents
	    </NavLink>

    </div>
  );
};

export default Nav;