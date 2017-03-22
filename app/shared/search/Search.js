import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { setQuery } from './searchActions';
import './Search.css';

const Search = React.createClass({

    /**
     * This is called on each keystroke and can be optimized.
     * One option would be to use something like "debounce" or throttling
     * Lodash has a pretty decent debounce implementation
     *
     * @see https://www.npmjs.com/package/lodash.debounce
    */
    onChange(e) {
        const { dispatch } = this.props;
        dispatch(setQuery(e.target.value.toLowerCase() || 'ALL'));
    },

    render() {
        return (
        <div className="search-wrapper">
            <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
                <input
                    className="search-field"
                    type="text"
                    ref="q"
                    placeholder={this.props.placeholderText || 'Search'}
                    onChange={this.onChange}
                />
            </ReactCSSTransitionGroup>
        </div>
        );
    }
});

export default Search;