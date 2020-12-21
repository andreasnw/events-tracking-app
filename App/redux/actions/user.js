export const addUser = (payload) => ({
    payload,
    type: 'ADD_USER'
});

export const setActiveUser = (payload) => ({
    payload,
    type: 'SET_ACTIVE_USER'
});

export const addWishlist = (payload) => ({
    payload,
    type: 'ADD_WISHLIST'
});

export const editWishlist = (payload) => ({
    payload,
    type: 'EDIT_WISHLIST'
});

export const removeWishlist = (payload) => ({
    payload,
    type: 'REMOVE_WISHLIST'
});