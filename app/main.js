import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import App from './App';

import store, {history} from './configureStore';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
          <Route path="/" component={App} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
