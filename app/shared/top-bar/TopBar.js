import React from 'react';
import {Link} from 'react-router-dom';
import 'material-design-lite/material.min.css';
import 'material-design-lite/material.min.js';
import './TopBar.css';

const TopBar = ({ title }) => (
    <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
            <h1 className="mdl-layout-title">{ title }</h1>
        </div>
    </header>
);

export default TopBar;