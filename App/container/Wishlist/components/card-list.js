import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { themeColor, buttonOpacity } from '@styles/theme';
import { resizeFont } from '@utils/font-resize';

let { height, width } = Dimensions.get('window');

export default class CardList extends React.Component {
    render() {
        let {
            drag,
            fee,
            isActive,
            item,
            handleRemoveWishlist,
            navigateToDetails,
        } = this.props;

        return (
            <TouchableOpacity
                onPress={() => navigateToDetails(item)}
                activeOpacity={buttonOpacity}
                onLongPress={drag}
                style={{
                    backgroundColor: isActive ? 'rgba(0,0,0,0.3)' : themeColor.grey,
                    borderRadius: 5,
                }}
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
                        <TouchableOpacity
                            activeOpacity={buttonOpacity}
                            onPress={() => handleRemoveWishlist(item)}
                        >
                            <View style={styles.deleteButton}>
                                <Text style={{ color: 'grey' }}>Delete</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        marginVertical: height * .5 / 100,
    },
    cardDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '75%',
    },
    cardInfo: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: resizeFont(8),
    },
    cardInfoContainer: {
        backgroundColor: '#94C694',
        width: width * 13 / 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
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
    deleteButton: {
        borderWidth: 1,
        paddingHorizontal: width * 2 / 100,
        borderRadius: 5,
        borderColor: 'grey',
    }
})