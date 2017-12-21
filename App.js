import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import HomePage from './HomePage';

export default class App extends React.Component {
  render() {
    const networkInterface = createNetworkInterface({ uri: 'http://localhost:3000/graphql' });
    const client = new ApolloClient({ networkInterface });

    return <ApolloProvider client={client}><HomePage/></ApolloProvider>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
