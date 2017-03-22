import React from 'react';
import {Link} from 'react-router-dom';
import 'material-design-lite/material.min.css';

const Footer = ({ title }) => (
    <div>
        <footer className="mdl-mini-footer">
            <div className="mdl-mini-footer__left-section">
                <ul className="mdl-mini-footer__link-list">
                    <li><a href="https://oprea.rocks">oprea.rocks</a></li>
                    <li><a href="https://twitter.com/@opreaadrian">Twitter - @opreaadrian</a></li>
                </ul>
            </div>
            <div className="mdl-mini-footer__right-section">
                <button className="mdl-mini-footer__social-btn"></button>
                <button className="mdl-mini-footer__social-btn"></button>
                <button className="mdl-mini-footer__social-btn"></button>
            </div>
        </footer>
    </div>
);

export default Footer;