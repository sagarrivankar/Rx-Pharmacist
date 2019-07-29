/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View, Image, Button, Alert,
} from 'react-native';
import Camera from 'react-native-camera';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class Landing extends React.Component {
    static navigationOptions = {
        title: 'Home'
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container} >
                <Image source={require('C:/Work/codebase/coc/RxPharmacist/assets/logo.png')}
                    style={{ width: 200, height: 200 }} />

                <Text style={styles.welcome}> Welcome </Text>
                <Text style={styles.instructions}> Pharmacist will help you to sort the medicine in one go </Text>

                <View style={[{ width: "70%", margin: 10 }]}>
                    <Button
                        title='Scan Utility'
                        onPress={() => { navigate('Camera') }
                        }
                        color="#1DE9B6"
                    />
                </View>
                <View style={[{ width: "70%", margin: 10 }]}>
                    <Button
                        title='Manage Stock'
                        onPress={() => { navigate('stock') }
                        }
                        color="#1DE9B6"
                    />
                </View>
                <View style={[{ width: "70%", margin: 10 }]}>
                    <Button
                        title='Configure Tool'
                        onPress={() => { navigate('config') }
                        }
                        color="#1DE9B6"
                    />
                </View>
            </View >
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontSize: 13,
    },
    btn: {
        marginTop: 50,
        color: 'red',

    },
    capture: {
        flex: 0,
        backgroundColor: 'steelblue',
        borderRadius: 10,
        color: 'red',
        padding: 15,
        margin: 45
    },

    view: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
});
