import React from 'react';

const Search = React.createClass({
    render() {
        return (
            <input type="text" ref="q" placeholder="Ex: Neck"/>
        );
    }
});

export default Search;