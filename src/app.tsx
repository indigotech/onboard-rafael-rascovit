import { ApolloProvider } from '@apollo/client';
import { Client } from 'apollo-client/client';
import { LoginScreen } from 'pages/login-screen';
import { UsersList } from 'pages/users-list';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <ApolloProvider client={Client}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LoginScreen} />
          <Route exact path='/users-list' component={UsersList} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};
