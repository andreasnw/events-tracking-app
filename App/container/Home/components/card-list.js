import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { themeColor, buttonOpacity } from '@styles/theme';
import basic from '@styles/basic';
import { resizeFont } from '@utils/font-resize';

import RightArrow from '@assets/images/right-arrow';

let { height, width } = Dimensions.get('window');

export default class CardList extends React.Component {
    render() {
        let { item, fee, navigateToDetails } = this.props;

        return (
            <TouchableOpacity
                onPress={() => navigateToDetails(item)}
                activeOpacity={buttonOpacity}
            >
                <View style={styles.cardContainer}>
                    <View style={{ backgroundColor: '#E4E4E4', marginRight: width * 2 / 100 }}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.cardImage}
                        />
                    </View>
                    <View style={styles.cardDetails}>
                        <View>
                            <Text style={styles.cardMainText}>{item.events}</Text>
                            <Text style={styles.cardSubText}>{item.location}</Text>
                            <View style={item.paid ? [styles.cardInfoContainer, { backgroundColor: '#F77777' }] : styles.cardInfoContainer}>
                                <Text style={item.paid ? [styles.cardInfo, { color: '#7D011F' }] : styles.cardInfo}>$ {fee}</Text>
                            </View>
                        </View>
                        <View>
                            <RightArrow
                                height={width * 4 / 100}
                                width={width * 4 / 100}
                                fill='grey'
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    cardDetails: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        width: '75%'
    },
    cardContainer: {
        flexDirection: 'row',
        marginBottom: height * 1 / 100
    },
    cardImage: {
        width: width * 20 / 100,
        height: width * 20 / 100,
        resizeMode: 'cover',
        borderRadius: 5,
    },
    cardMainText: {
        fontWeight: 'bold',
    },
    cardSubText: {
        color: 'grey',
    },
    cardInfoContainer: {
        backgroundColor: '#94C694',
        width: width * 13 / 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    cardInfo: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: resizeFont(8)
    },
    container: {
        paddingHorizontal: width * 5 / 100,
    }
})