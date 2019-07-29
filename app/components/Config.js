import React, { Component } from 'react';

import { AppRegistry, StyleSheet, FlatList, Text, View, Alert, Platform, Button } from 'react-native';
import KeepAwake from 'react-native-keep-awake';
const medicalNames = require('./medicalNames.json');

export default class Config extends React.Component {

    static navigationOptions = {
        title: 'Config'
    }
    constructor(props) {
        super(props);

        this.state = {
            GridViewItems: [
                {
                    "key": 1,
                    'motornumer': 1,
                    "category1": 'Analgesics',
                    "category1_keywords": "",
                    "category2": 'Antibacterials',
                    "category2_keywords": ""
                }, {
                    "key": 2,
                    'motornumer': 2,
                    "category1": 'Antidepressants',
                    "category1_keywords": "",
                    "category2": 'Respiratory',
                    "category2_keywords": ""
                }, {
                    "key": 3,
                    'motornumer': 3,
                    "category1": 'Multivitamin',
                    "category1_keywords": "",
                    "category2": 'Antibiotic',
                    "category2_keywords": ""
                }, {
                    "key": 4,
                    'motornumer': 4,
                    "category1": 'Pediatric',
                    "category1_keywords": "",
                    "category2": 'Gastro',
                    "category2_keywords": ""
                }
            ]
        }
    }
    GetGridViewItem(item) {

        Alert.alert(item);

    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.MainContainer} >
                <Button style={styles.btn}
                    title='Setup I/O '
                    onPress={() => { navigate('bluetooth') }
                    }
                    color="#1DE9B6"
                />


                <FlatList

                    data={this.state.GridViewItems}

                    renderItem={({ item }) => <View style={styles.GridViewBlockStyle}>

                        <Text style={styles.GridViewInsideTextItemStyle} onPress={this.GetGridViewItem.bind(this, item.motornumer)} > Motor {item.motornumer}

                        </Text>
                        <Text> Left Position : {item.category1}</Text>
                        <Text> Right Position : {item.category2}</Text>

                    </View>}

                    numColumns={2}

                />
                <Button style={styles.btn}
                    title='Add New Motor'
                    onPress={() => { navigate('bluetooth') }
                    }
                    color="#1DE9B6"
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {

        justifyContent: 'center',
        flex: 1,
        margin: 10,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0

    },

    GridViewBlockStyle: {

        justifyContent: 'center',
        flex: 2,
        alignItems: 'center',
        height: 100,
        margin: 5,
        backgroundColor: '#fff',
        borderColor: "#00FFFF"

    }
    ,

    GridViewInsideTextItemStyle: {

        color: '#008C8C',
        padding: 10,
        fontSize: 18,
        justifyContent: 'center',

    },
    btn: {
        width: 50,
        margin: 20,
        marginTop: 20
    }

});


AppRegistry.registerComponent('Config', () => Scanner);