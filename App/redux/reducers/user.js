import produce from 'immer';

const initialState = {
    user_data: [],
    active_user: {},
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_USER':
            return produce(state, draft => {
                draft.user_data = draft.user_data.concat(action.payload);
            });
        case 'SET_ACTIVE_USER':
            return { ...state, active_user: action.payload };
        case 'ADD_WISHLIST':
            let { item } = action.payload;
            let isDuplicate = false;

            return produce(state, draft => {
                for (let i = 0; i < draft.user_data.length; ++i) {
                    if (draft.user_data[i].id === draft.active_user.id) {
                        for (let j = 0; j < draft.user_data[i].list.length; ++j) {
                            if (draft.user_data[i].list[j].id === item.id) {
                                isDuplicate = true;
                                break;
                            }
                        }

                        if (!isDuplicate) {
                            draft.user_data[i].list = draft.user_data[i].list.concat(item);
                            draft.active_user.list = draft.active_user.list.concat(item);
                        }
                        break;
                    }
                }
            })
        case 'EDIT_WISHLIST':
            item = action.payload;

            return produce(state, draft => {
                for (let i = 0; i < draft.user_data.length; ++i) {
                    if (draft.user_data[i].id === draft.active_user.id) {
                        draft.user_data[i].list = item;
                        break;
                    }
                };
    
                draft.active_user.list = item;
            })
        case 'REMOVE_WISHLIST':
            item = action.payload;

            return produce(state, draft => {
                for (let i = 0; i < draft.user_data.length; ++i) {
                    if (draft.user_data[i].id === draft.active_user.id) {
                        for (let j = 0; j < draft.user_data[i].list.length; j++) {
                            if (draft.user_data[i].list[j].id === item.id) {
                                draft.user_data[i].list.splice(j, 1);
                                draft.active_user.list.splice(j, 1);
                                break;
                            }
                        }
                        break;
                    }
                };
            })
        default:
            return state;
    }
};