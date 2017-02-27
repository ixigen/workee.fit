import React from 'react';
import Card from 'Card';

const ExerciseCard = ({ name, description }) => (<Card title={ name } description={ description }/>);

export default ExerciseCard;