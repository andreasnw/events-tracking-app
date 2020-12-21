import React from 'react';
import { connect } from 'react-redux';
import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import basic from '@styles/basic';
import { themeColor, buttonOpacity } from '@styles/theme';

import RightArrow from '@assets/images/right-arrow.svg';

let { width, height } = Dimensions.get('window');

import {
    addUser,
    setActiveUser,
} from '@redux/actions/user';

class Login extends React.Component {

    state = {
        name: '',
    }

    handleNameInput = (text) => {
        this.setState({ name: text });
    };

    handleLogin = () => {
        let user,
            copyUser = JSON.parse(JSON.stringify(this.props.user_data)),
            isDuplicate = false

        for (let i = 0; i < copyUser.length; ++i) {
            if (copyUser[i].name.toLocaleLowerCase() === this.state.name.toLocaleLowerCase()) {
                isDuplicate = true;
                user = copyUser[i];
                this.props.setActiveUser(user);
                break;
            }
        }

        if (!isDuplicate) {
            user = {
                id: new Date().toISOString(),
                name: this.state.name,
                list: [],
            }

            this.props.addUser(user);
            this.props.setActiveUser(user);
        }

        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={[basic.mainText, styles.headline]}>Please Enter Your Name</Text>
                    <TextInput
                        onChangeText={(text) => this.handleNameInput(text)}
                        style={[basic.paragraph, styles.input]}
                        autoFocus={true}
                    />
                    <TouchableOpacity
                        onPress={this.handleLogin}
                        activeOpacity={buttonOpacity}
                    >
                        <View style={styles.button}>
                            <Text style={[basic.paragraph, { color: themeColor.grey }]}>Continue</Text>
                            <RightArrow
                                width={width * 5 / 100}
                                height={width * 5 / 100}
                                fill='white'
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    };
};

const mapStateToProps = state => {
    const { user } = state;
    return {
        user_data: user.user_data,
    }
}

const mapDispatchToProps = {
    addUser,
    setActiveUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        paddingVertical: width * 1 / 100,
        borderRadius: 10,
        width: width * 90 / 100,
        paddingHorizontal: width * 3 / 100,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: width * 5 / 100,
    },
    headline: {
        width: width * 60 / 100,
        marginBottom: height * 3 / 100,
    },
    input: {
        borderBottomWidth: 1,
        width: width * 90 / 100,
        marginBottom: height * 2 / 100,
        paddingVertical: width * 1 / 100,
        paddingHorizontal: width * 3 / 100,
    },
})