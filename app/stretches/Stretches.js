import React from 'react';
import {Route} from 'react-router-dom';

import Search from 'search/Search';

import Stretch from './Stretch';

const Stretches = React.createClass({
    render() {
        return(
            <div>
                <Search
                    placeholderText="What hurts?"
                    {...this.props} />
                Stretching coming soon!

                <Route path="/stretching/:area" component={Stretch} />
            </div>
        );
    }
});

export default Stretches;