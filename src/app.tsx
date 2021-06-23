import { ApolloProvider } from '@apollo/client';
import { Client } from 'apollo-client/client';
import { AddUser } from 'pages/add-user';
import { LoginScreen } from 'pages/login-screen';
import { UserDetails } from 'pages/user-details';
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
          <Route exact path='/user-add' component={AddUser} />
          <Route exact path='/user-details/:id' component={UserDetails} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};
