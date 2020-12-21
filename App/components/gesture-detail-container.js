import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

let { height, width } = Dimensions.get('window');

export default class GestureDetailContainer extends React.Component {

    handleGesture = ({ nativeEvent }) => {
        this.props.navigation.navigate('Wishlist')
    }

    render() {
        return (
            <PanGestureHandler
                onGestureEvent={this.handleGesture}
                activeOffsetX={-(width - 50)}
            >
                <View style={styles.container}>
                    {this.props.children}
                </View>
            </PanGestureHandler>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})