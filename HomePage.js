import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = { name: 'George Washington' };
  }

  render() {
    return <View>{this.state.name} </View>
  }
}
