import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import Home from './pages/home'

// const Home = React.lazy(() => import('./pages/Home'));
// const FirstPage = React.lazy(() => import('./pages/first'));
// const NotFoundPage = React.lazy(() => import('./pages/not-found'));

const App = () => (
  <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/first" exact component={FirstPage} />
        <Route component={NotFoundPage} /> */}
    </Switch>
  </BrowserRouter>
);

render(<App />, document.querySelector('#app'));