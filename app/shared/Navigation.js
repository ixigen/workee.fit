import React from 'react';
import {NavLink} from 'react-router-dom';
import 'material-design-lite/material.min.css';

const Navigation = ({title}) => {
  return (
    <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">{ title }</span>
      <nav className="mdl-navigation">
        <NavLink className="mdl-navigation__link" to="/">Home</NavLink>
        <NavLink className="mdl-navigation__link" to="/workout">Workouts</NavLink>
        <NavLink className="mdl-navigation__link" to="/stretching">Stretches</NavLink>
      </nav>
    </div>
  );
};

export default Navigation;