import React, { StrictMode, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// 自适应 js文件
import './assets/flexible/flexible';
import './index.less';
import * as serviceWorker from './serviceWorker';

// 懒加载
const Demo1 = lazy(() => import('./Pages/Demo1'));
const Demo2 = lazy(() => import('./Pages/Demo2'));

const Loading = () => <div style={{ width: '100%', textAlign: 'center', marginTop: '200px' }}>loading...</div>

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/demo1" />
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
