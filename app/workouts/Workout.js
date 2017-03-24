import React from 'react';
import './Workout.css';

const Workout = ({ name, imageUrl, pdfSource, description }) => {
    return(
<div className="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-phone mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title mdl-card--expand">
                <h2 className="mdl-card__title-text" style={{textTransform: 'capitalize'}}>{name}</h2>
            </div>
            <div className="mdl-card__supporting-text mdl-grid">
                <img className="workout-image mdl-cell mdl-cell--5-col" src={`${imageUrl}`} alt={name}/>
            </div>
            <div className="mdl-card__actions mdl-card--border">
                <a href={`/workout/${name.split(' ').join('-')}`} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    View details
                </a>
                {
                    pdfSource && <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href={pdfSource} target="_blank" title={name}>Download {name} PDF</a>}
            </div>
        </div>
    );
};

export default Workout;