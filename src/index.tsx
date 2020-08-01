import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'App';
import * as serviceWorker from './serviceWorker';
import './index.scss';

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}

const render = (Component: React.Component | any) => {
  return ReactDOM.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
