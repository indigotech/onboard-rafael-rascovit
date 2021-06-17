import { ApolloProvider } from '@apollo/client';
import { Client } from 'apollo-client/client';
import { LoginScreen } from 'pages/login-screen';
import React from 'react';

export const App: React.FC = () => {
  return (
    <ApolloProvider client={Client}>
      <LoginScreen />
    </ApolloProvider>
  );
};
