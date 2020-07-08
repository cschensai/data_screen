import React, { StrictMode, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const Demo1 = lazy(() => import('./Pages/Demo1'));
const Demo2 = lazy(() => import('./Pages/Demo2'));

const Loading = () => <div style={{ width: '100%', textAlign: 'center', marginTop: '200px' }}>loading...</div>

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          <Redirect from="/" exact to="/demo1" />
          <Route path="/demo1" component={Demo1} />
          <Route path="/demo2" component={Demo2} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
