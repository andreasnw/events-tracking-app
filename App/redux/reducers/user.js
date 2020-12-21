const initialState = {
    user_data: [],
    active_user: {},
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_USER':
            return { ...state, user_data: state.user_data.concat(action.payload) };
        case 'SET_ACTIVE_USER':
            return { ...state, active_user: action.payload };
        case 'ADD_WISHLIST':
            let { item } = action.payload;
            let { user_data, active_user } = state;
            let tempUserData = JSON.parse(JSON.stringify(user_data));
            let tempActiveUser = JSON.parse(JSON.stringify(active_user));
            let isDuplicate = false;

            for (let i = 0; i < tempUserData.length; ++i) {
                if (tempUserData[i].id === active_user.id) {
                    for (let j = 0; j < tempUserData[i].list.length; ++j) {
                        if (tempUserData[i].list[j].id === item.id) {
                            isDuplicate = true;
                            break;
                        }
                    }

                    if (!isDuplicate) {
                        tempUserData[i].list = tempUserData[i].list.concat(item);
                        tempActiveUser.list = tempActiveUser.list.concat(item);
                    }
                    break;
                }
            }

            return { ...state, user_data: tempUserData, active_user: tempActiveUser };
        case 'EDIT_WISHLIST':
            item = action.payload;
            user_data = state.user_data;
            active_user = state.active_user;
            tempUserData = JSON.parse(JSON.stringify(user_data));
            tempActiveUser = JSON.parse(JSON.stringify(active_user));

            for (let i = 0; i < tempUserData.length; ++i) {
                if (tempUserData[i].id === active_user.id) {
                    tempUserData[i].list = item;
                    break;
                }
            };

            tempActiveUser.list = item;

            return { ...state, user_data: tempUserData, active_user: tempActiveUser };
        case 'REMOVE_WISHLIST':
            item = action.payload;
            user_data = state.user_data;
            active_user = state.active_user;
            tempUserData = JSON.parse(JSON.stringify(user_data));
            tempActiveUser = JSON.parse(JSON.stringify(active_user));

            for (let i = 0; i < tempUserData.length; ++i) {
                if (tempUserData[i].id === active_user.id) {
                    for (let j = 0; j < tempUserData[i].list.length; j++) {
                        if (tempUserData[i].list[j].id === item.id) {
                            tempUserData[i].list.splice(j, 1);
                            tempActiveUser.list.splice(j, 1);
                            break;
                        }
                    }
                    break;
                }
            };

            return { ...state, user_data: tempUserData, active_user: tempActiveUser };
        default:
            return state;
    }
};