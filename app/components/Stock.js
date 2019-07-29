import React, { Component } from 'react';

import { AppRegistry, StyleSheet, FlatList, Text, View, Alert, Platform } from 'react-native';

import KeepAwake from 'react-native-keep-awake';
const medicalNames = require('./medicalNames.json');

export default class Stock extends React.Component {

    static navigationOptions = {
        title: 'Config'
    }
    constructor(props) {
        super(props);

        this.state = {
            GridViewItems: [
                {
                    "key": 1,
                    "usp_category": "Analgesics",
                    "stock": 151
                },
                {
                    "key": 2,
                    "usp_category": "Anesthetics",
                    "stock": 265
                },
                {
                    "key": 3,
                    "usp_category": "Anti-Addiction/Substance Abuse Treatment Agents",
                    "stock": 157
                },
                {
                    "key": 4,
                    "usp_category": "Antibacterials",
                    "stock": 164
                },
                {
                    "key": 5,
                    "usp_category": "Anticonvulsants",
                    "stock": 270
                },
                {
                    "key": 6,
                    "usp_category": "Antidementia Agents",
                    "stock": 171
                },
                {
                    "key": 7,
                    "usp_category": "Antidepressants",
                    "stock": 216
                },
                {
                    "key": 8,
                    "usp_category": "Antiemetics",
                    "stock": 133
                },
                {
                    "key": 9,
                    "usp_category": "Anti-inflammatory Agents",
                    "stock": 203
                },
                {
                    "key": 10,
                    "usp_category": "Antimigraine Agents",
                    "stock": 179
                },
                {
                    "key": 11,
                    "usp_category": "Antimyasthenic Agents",
                    "stock": 247
                },
                {
                    "key": 12,
                    "usp_category": "Antimycobacterials",
                    "stock": 147
                },
                {
                    "key": 13,
                    "usp_category": "Antineoplastics",
                    "stock": 103
                },
                {
                    "key": 14,
                    "usp_category": "Antiparasitics",
                    "stock": 252
                },
                {
                    "key": 15,
                    "usp_category": "Antiparkinson Agents",
                    "stock": 297
                },
                {
                    "key": 16,
                    "usp_category": "Antipsychotics",
                    "stock": 162
                },
                {
                    "key": 17,
                    "usp_category": "Antivirals",
                    "stock": 195
                },
                {
                    "key": 18,
                    "usp_category": "Anxiolytics",
                    "stock": 232
                },
                {
                    "key": 19,
                    "usp_category": "Bipolar Agents",
                    "stock": 139
                },
                {
                    "key": 20,
                    "usp_category": "Blood Glucose Regulators",
                    "stock": 151
                },
                {
                    "key": 21,
                    "usp_category": "Blood Products/Modifiers/Volume Expanders",
                    "stock": 268
                },
                {
                    "key": 22,
                    "usp_category": "Cardiovascular Agents",
                    "stock": 139
                },
                {
                    "key": 23,
                    "usp_category": "Central Nervous System Agents",
                    "stock": 133
                },
                {
                    "key": 24,
                    "usp_category": "Gastrointestinal Agents",
                    "stock": 139
                },
                {
                    "key": 25,
                    "usp_category": "Genitourinary Agents",
                    "stock": 250
                },
                {
                    "usp_category": "Hormonal Agents, Stimulant/Replacement/Modifying (Sex Hormones/Modifiers)",
                    "stock": 236
                },
                {
                    "usp_category": "Hormonal Agents, Suppressant (Thyroid)",
                    "stock": 282
                },
                {
                    "usp_category": "Immunological Agents",
                    "stock": 222
                },
                {
                    "usp_category": "Inflammatory Bowel Disease Agents",
                    "stock": 235
                },
                {
                    "usp_category": "Ophthalmic Agents",
                    "stock": 257
                },
                {
                    "usp_category": "Respiratory Tract/Pulmonary Agents",
                    "stock": 243
                },
                {
                    "usp_category": "Sleep Disorder Agents",
                    "stock": 164
                },
                {
                    "usp_category": "Therapeutic Nutrients/Minerals/Electrolytes",
                    "stock": 272
                },
                {
                    "usp_category": "Paracetamol",
                    "stock": 264
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

                <FlatList

                    data={this.state.GridViewItems}

                    renderItem={({ item }) => <View style={styles.GridViewBlockStyle}>

                        <Text style={styles.GridViewInsideTextItemStyle} onPress={this.GetGridViewItem.bind(this, item.usp_category)} >  {item.stock} </Text>
                        <Text>{item.usp_category}</Text>

                    </View>}

                    numColumns={2}

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
        flex: 1,
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

});

AppRegistry.registerComponent('Stock', () => Scanner);
