import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { themeColor, buttonOpacity } from '@styles/theme';
import basic from '@styles/basic';

import GridIcon from '@assets/images/grid.svg';
import ListIcon from '@assets/images/list.svg';

let { height, width } = Dimensions.get('window');

export default class Header extends React.Component {
    render() {
        let { modes, name, handleSwitchMode } = this.props;

        return (
            <View>
                <View style={{ marginBottom: height * 1 / 100, marginTop: height * 5 / 100 }}>
                    <Text style={[basic.mainText, { maxWidth: width * 60 / 100 }]}>Hi {name}!</Text>
                    <Text style={[basic.mainText, { maxWidth: width * 60 / 100 }]}>Here is some events for you.</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => handleSwitchMode('list')}
                        activeOpacity={buttonOpacity}
                    >
                        <View style={
                            modes === 'list'
                                ? [styles.button, { backgroundColor: 'black' }]
                                : styles.button}
                        >
                            <ListIcon
                                height={width * 4 / 100}
                                width={width * 4 / 100}
                                fill={
                                    modes === 'list'
                                        ? themeColor.grey
                                        : 'grey'}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleSwitchMode('grid')}
                        activeOpacity={buttonOpacity}
                    >
                        <View style={
                            modes === 'grid'
                                ? [styles.button, { backgroundColor: 'black' }]
                                : styles.button}>
                            <GridIcon
                                height={width * 4 / 100}
                                width={width * 4 / 100}
                                fill={
                                    modes === 'grid'
                                        ? themeColor.grey
                                        : 'grey'}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#E4E4E4',
        width: width * 7 / 100,
        height: width * 7 / 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: width * 2 / 100,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBottom: height * 2 / 100,
    },
})