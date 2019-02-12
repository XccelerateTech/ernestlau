/** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
import MastodonClient from './App'
import FlatListDemo from './FlatListDemo'
import Camera from './Camera'

// AppRegistry.registerComponent(appName, () => App);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, TextInput, Text, View, SafeAreaView, StyleSheet, WebView, Image, AlertIOS } from 'react-native';
import { AppRegistry } from 'react-native';
import MapView from 'react-native-maps';
import { Avatar } from 'react-native-elements';


// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//     android:
//         'Double tap R on your keyboard to reload,\n' +
//         'Shake or press menu button for dev menu',
// });
export default class NavigatorIOSApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({ text: "", items: { name: 'test2' } })
    }

    getLongitudeAndLatitude = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                location => {
                    resolve([location.coords.longitude, location.coords.latitude]);
                },
                error => {
                    reject(error);
                }
            );
        });
    };

    getInitialState() {
        return {
            region: {
                latitude: -122.78825,
                longitude: 37.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        };
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    componentDidMount() {
        let that = this
        this.getLongitudeAndLatitude().then((res) => {
            that.setState({ items: { name: "Your current location is at: " + res } })
        })
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <Text style={{ textAlign: 'center' }}>{this.state.items.name}</Text>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    {/* <Avatar
                        size="xlarge"
                        rounded
                        source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    /> */}
                    <Image
                        style={{ width: 50, height: 50, margin: 20 }}
                        source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                    />
                </View >
                <View style={{ flex: 3, alignItems: 'center' }}>
                    <TextInput placeholder="Username" style={styles.inputStyle} onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}></TextInput>
                    <TextInput placeholder="Password" secureTextEntry={true} style={styles.inputStyle}></TextInput>
                    <Button
                        onPress={() => { AlertIOS.alert(
                            'Login Fail',
                            `I dont make any API call yet, fuck you ${this.state.text}`,
                            [
                              {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                              },
                              {
                                text: 'Fuck',
                                onPress: () => console.log('Install Pressed'),
                              },
                            ],
                          ); }}
                        title="Login In"
                        color="skyblue"
                        accessibilityLabel="Learn more about this purple button"
                        disabled={false}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    inputStyle: {
        width: 250,
        margin: 10,
        padding: 10,
        borderWidth: 1
    }
});


AppRegistry.registerComponent(appName, () => Camera);
