import React from 'react';
import Category from './Category';

const Categories = React.createClass({
    categories: ['Head', 'Shoulders', 'Knees', 'Toes'],
    render() {
        return (
            <div>
                { this.categories.map(category => (<Category title={ category }/>)) }
            </div>
        );
    },
});

export default Categories;