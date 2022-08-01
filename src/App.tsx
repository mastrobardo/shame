import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GameDetailPage } from '@pages/GamePage';
import { Home } from '@pages/Home';
import {ErrorBoundary} from 'react-error-boundary';
import { ErrorComponent } from '@components/Error/error';

const App = () => {
  
  return (
    <BrowserRouter>
      <div className="container">
      <ErrorBoundary FallbackComponent={ErrorComponent!}>

        <Switch>
             <Route path="/" component={Home} exact />

          <Route path="/:gameId" component={GameDetailPage} />
        </Switch>
    </ErrorBoundary>

      </div>
    </BrowserRouter>
  );
};

export default App;
