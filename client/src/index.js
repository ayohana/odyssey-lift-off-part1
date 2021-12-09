import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Every instance of ApolloClient uses an in-memory cache.
// This enables it to store and reuse query results so it doesn't have to make as many network requests.
const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

// But how do make the ApolloClient available to use in our react app?
// This is where the ApolloProvider comes in.
// ApolloProvider component uses React's Context API to make our configured
// ApolloClient instance we made above to be available throughout a React component tree.
ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
