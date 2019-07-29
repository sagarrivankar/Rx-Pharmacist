import React, { Component } from 'react';

import { RNCamera } from 'react-native-camera';
import {
    StyleSheet, Text, View, TouchableOpacity, AppRegistry,
} from 'react-native';
import KeepAwake from 'react-native-keep-awake';
//import * as _ from 'underscore'
const medicalNames = require('./medicalNames.json');
//const drugs = require('./drug.json');

export default class Scanner extends React.Component {

    static navigationOptions = {
        title: 'Camera'
    }
    state = { showMessage: false, category: '', quantity: '10 tablets' };
    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true, autoFocus: on, focusDepth: 1 };
            const data = await this.camera.takePictureAsync(options);
            console.log(data);
        }
    }
    toggleMessage = function (message) {
        this.setState({
            showMessage: !this.state.showMessage
        });
        this.setState({
            category: message
        });
    }
    render() {
        const { navigate } = this.props.navigation;
        KeepAwake.activate();
        //console.log(medicalNames);
        return (
            <View style={styles.container}>
                {this.state.showMessage ? <Text style={styles.capture}>Medicine Type : {this.state.category}, Quantity : {this.state.quantity} </Text> : <Text></Text>}
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}

                    onTextRecognized={(d) => {
                        console.log('onTextRecognized', d.textBlocks.map(e => e.value));
                        let textBlock = d.textBlocks.map(e => e.value).join(' ');
                        var keywords = [];
                        let words = textBlock.split(" ");
                        // console.log(words)
                        var text = textBlock.trim().toLowerCase().replace(/ /g, '')
                        //console.log(text);
                        for (let name of medicalNames) {
                            //textBlock.includes(name);
                            //  console.log('\/' + name + '\/g');
                            // console.log(text.indexOf(name))
                            if (text.indexOf(name) > -1) {
                                keywords[keywords.length] = name;
                            }
                        }
                        // search in the CSV file to find the detailed category
                        // make a call to the motor on aurdrino
                        if (keywords.length > 0) {
                            this.toggleMessage(keywords.join(','));


                            /* BluetoothSerial.write("T")
                                 .then((res) => {
                                     console.log(res);
                                     console.log('Successfuly wrote to device')
                                     this.setState({ connected: true })
                                 })
                                 .catch((err) => console.log(err.message))*/
                            //run the conveyor belt
                        }

                        //console.log(d.textBlocks.map(e => e.value).join(' '));
                        // console.log(d.textBlocks)
                    }}
                />

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});

AppRegistry.registerComponent('Scanner', () => Scanner);