import React from 'react';
import { connect } from 'react-redux';
import {
    Dimensions,
    FlatList,
    SafeAreaView,
    View,
} from 'react-native';

import EVENTS from '@boot/database.json';

import GestureDetailContainer from '@components/gesture-detail-container';
import CardGrid from './components/card-grid';
import CardList from './components/card-list';
import Header from './components/header';

let { height, width } = Dimensions.get('window');

class Home extends React.Component {

    state = {
        modes: 'list',
        wishlist: [],
    }

    handleNameInput = (text) => {
        this.setState({ name: text });
    };

    handleSwitchMode = (value) => {
        this.setState({ modes: value })
    }

    navigateToDetails = (item) => {
        this.props.navigation.navigate('EventDetail', { item })
    }

    renderHeader = () => {
        let { name } = this.props.active_user;
        let { modes } = this.state;

        return <Header modes={modes} name={name} handleSwitchMode={this.handleSwitchMode} />
    }

    renderListItem = ({ item }) => {
        let fee;
        item.paid ? fee = 'PAID' : fee = 'FREE'

        return <CardList item={item} fee={fee} navigateToDetails={this.navigateToDetails} />
    }

    renderGridItem = ({ item }) => {
        let fee;
        item.paid ? fee = 'PAID' : fee = 'FREE';

        return <CardGrid item={item} fee={fee} navigateToDetails={this.navigateToDetails} />
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <GestureDetailContainer navigation={this.props.navigation} >
                    <View style={{ paddingHorizontal: width * 5 / 100 }}>
                        {
                            this.state.modes === 'list'
                                ? <FlatList
                                    contentContainerStyle={{ paddingBottom: height * 5 / 100 }}
                                    data={EVENTS}
                                    key={'list'}
                                    ListHeaderComponent={this.renderHeader}
                                    renderItem={this.renderListItem}
                                    keyExtractor={item => item.id.toString()}
                                    showsVerticalScrollIndicator={false}
                                    initialNumToRender={7}
                                />
                                : <FlatList
                                    contentContainerStyle={{ paddingBottom: height * 5 / 100 }}
                                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                                    data={EVENTS}
                                    key={'grid'}
                                    ListHeaderComponent={this.renderHeader}
                                    renderItem={this.renderGridItem}
                                    keyExtractor={item => item.id.toString()}
                                    numColumns={2}
                                    showsVerticalScrollIndicator={false}
                                    initialNumToRender={6}
                                />
                        }
                    </View>
                </GestureDetailContainer>
            </SafeAreaView>
        );
    };
};

const mapStateToProps = state => {
    const { user } = state;
    return {
        user_data: user.user_data,
        active_user: user.active_user
    };
}

export default connect(mapStateToProps, null)(Home);