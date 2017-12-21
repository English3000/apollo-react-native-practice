import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default class HomePage {
  constructor() {
    super();
    this.state = { name: 'George Washington' };
  }
}
