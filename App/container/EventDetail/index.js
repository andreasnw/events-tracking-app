import React from 'react';
import { connect } from 'react-redux';
import {
    Dimensions,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import basic from '@styles/basic';
import { addWishlist } from '@redux/actions/user';
import { themeColor, buttonOpacity } from '@styles/theme';
import { resizeFont } from '@utils/font-resize';

import GestureDetailContainer from '@components/gesture-detail-container';
import RightArrow from '@assets/images/right-arrow.svg';

let { height, width } = Dimensions.get('window');

class EventDetail extends React.Component {

    handleAddWishlist = (item) => {
        this.props.addWishlist(item);
    }

    handleBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        let { events, location, paid, image, } = this.props.route.params.item;
        let fee;
        paid ? fee = 'PAID' : fee = 'FREE'

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <GestureDetailContainer navigation={this.props.navigation}>
                    <View style={styles.container}>
                        <TouchableOpacity
                            onPress={() => this.handleBack()}
                            style={{ alignSelf: 'flex-start' }}
                        >
                            <View style={styles.backButton}>
                                <RightArrow
                                    height={width * 5 / 100}
                                    width={width * 5 / 100}
                                    fill='black'
                                />
                            </View>
                        </TouchableOpacity>
                        <Image
                            source={{ uri: image }}
                            style={styles.displayImage}
                        />
                        <View style={{ marginBottom: height * 10 / 100, alignItems: 'center' }}>
                            <Text style={basic.mainText}>{events}</Text>
                            <Text style={[basic.paragraph, { color: 'grey' }]}>{location}</Text>
                            <View style={paid ? [styles.cardInfoContainer, { backgroundColor: '#F77777' }] : styles.cardInfoContainer}>
                                <Text style={paid ? [styles.cardInfo, { color: '#7D011F' }] : styles.cardInfo}>$ {fee}</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => this.handleAddWishlist(this.props.route.params)}
                            activeOpacity={buttonOpacity}
                        >
                            <View style={styles.buttonContainer}>
                                <Text style={[basic.paragraph, { color: 'white' }]}> + Add to watchlist </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </GestureDetailContainer>
            </SafeAreaView>
        );
    };
};

const styles = StyleSheet.create({
    backButton: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        transform: [{ rotate: '180deg' }],
        marginBottom: height * 10 / 100,
        width: width * 10 / 100,
        height: height * 5 / 100,
    },
    buttonContainer: {
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: width * 5 / 100,
        backgroundColor: 'black',
    },
    cardInfo: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: resizeFont(12)
    },
    cardInfoContainer: {
        backgroundColor: '#94C694',
        width: width * 25 / 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: width * 5 / 100,
        paddingTop: height * 5 / 100,
    },
    displayImage: {
        width: width * 60 / 100,
        height: width * 60 / 100,
        backgroundColor: 'grey',
        borderRadius: 10,
    },
})

const mapDispatchToProps = {
    addWishlist,
}

export default connect(null, mapDispatchToProps)(EventDetail);