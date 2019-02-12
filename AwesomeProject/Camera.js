import { RNCamera } from 'react-native-camera';
import React, { Component } from 'react'
import {
    View
  } from 'react-native'

export default class Camera extends Component {
  render() {
    return (
      <View style={ {flex: 1} }>
        <RNCamera style={ {flex: 1} } />
      </View>
    );
  }
}