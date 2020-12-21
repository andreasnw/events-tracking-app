import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { buttonOpacity } from '@styles/theme';

let { height, width } = Dimensions.get('window');

export default class CardGrid extends React.Component {
    render () {
        let { item, fee, navigateToDetails } = this.props;

        return (
            <TouchableOpacity
                onPress={() => navigateToDetails(item)}
                activeOpacity={buttonOpacity}
            >
                <View style={styles.cardContainer}>
                    <View style={{ marginRight: width * 2/100 }}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.cardImage}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View>
                            <Text style={styles.cardMainText}>{item.events}</Text>
                            <Text style={styles.cardSubText}>{item.location}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: height * 1 / 100,
        marginRight: width * 1 / 100,
        width: width * 40/100,
    },
    cardImage: {
        width: width * 40 / 100,
        height: width * 40 / 100,
        resizeMode: 'cover',
        borderRadius: 5,
        backgroundColor: '#E4E4E4',
    },
    cardMainText: {
        fontWeight: 'bold',
    },
    cardSubText: {
        color: 'grey',
    },
})