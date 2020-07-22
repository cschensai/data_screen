import React, { StrictMode, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Loading from '@jiaminghi/data-view-react/es/loading';
// 自适应 js文件
import './assets/flexible/flexible';
// 全局样式引入
import './index.less';
import * as serviceWorker from './serviceWorker';

// 懒加载
const Demo1 = lazy(() => import('./Pages/Demo1'));
const Demo2 = lazy(() => import('./Pages/Demo2'));

const LoadingComp = () => <div style={{ width: '100%', textAlign: 'center', marginTop: '200px' }}><Loading>努力加载中...</Loading></div>

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<LoadingComp />}>
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
