import React from 'react';
import { connect } from 'react-redux';
import {
    Dimensions,
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import DraggableFlatList from 'react-native-draggable-flatlist';

import basic from '@styles/basic';
import { editWishlist, removeWishlist } from '@redux/actions/user';

import CardList from './components/card-list';

let { height, width } = Dimensions.get('window');

class Wishlist extends React.Component {

    state = {
        navigate: false,
    }

    componentDidMount() {
        this.setState({ navigate: false });
    }

    handleEditWishlist = (item) => {
        this.props.editWishlist(item);
    }

    handleGesture = () => {
        if (!this.state.navigate) {
            this.setState({ navigate: true }, () => {
                this.props.navigation.goBack();
            });
        };
    }

    handleRemoveWishlist = (item) => {
        this.props.removeWishlist(item);
    }

    navigateToDetails = (item) => {
        this.props.navigation.navigate('EventDetail', { item });
    }

    renderItem = ({ item, index, drag, isActive }) => {
        let fee;
        item.paid ? fee = 'PAID' : fee = 'FREE';

        return <CardList
            drag={drag}
            fee={fee}
            item={item}
            isActive={isActive}
            handleRemoveWishlist={this.handleRemoveWishlist}
            navigateToDetails={this.navigateToDetails} />
    };


    render() {
        let { list } = this.props.active_user
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <PanGestureHandler
                    onGestureEvent={this.handleGesture}
                    activeOffsetX={(width - 50)}
                >
                    <View style={{ flex: 1, paddingHorizontal: width * 5 / 100, marginTop: height * 5 / 100 }}>
                        <View style={{ marginBottom: height * 2 / 100 }}>
                            <Text style={basic.mainText}>Your Wishlist</Text>
                        </View>
                        {
                            list.length > 0
                                ? <DraggableFlatList
                                    data={list}
                                    renderItem={this.renderItem}
                                    keyExtractor={(item, index) => `draggable-item-${item.id}`}
                                    onDragEnd={({ data }) => this.handleEditWishlist(data)}
                                />
                                : <Text style={[basic.paragraph, { color: 'grey' }]}>Wishlist Anda masih kosong</Text>
                        }
                    </View>
                </PanGestureHandler>
            </SafeAreaView>
        )
    }
};

const mapStateToProps = state => {
    const { user } = state;
    return {
        user_data: user.user_data,
        active_user: user.active_user,
    }
}

const mapDispatchToProps = {
    removeWishlist,
    editWishlist,
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);