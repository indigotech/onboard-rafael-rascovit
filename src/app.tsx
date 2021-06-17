import { ApolloProvider } from '@apollo/client';
import { Client } from 'apollo-client/client';
import { LoginScreen } from 'pages/login-screen';
import { NewPage } from 'pages/new-page';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <ApolloProvider client={Client}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LoginScreen} />
          <Route exact path='/new' component={NewPage} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};
