import * as types from '../constants/PostTypes';

export const addPost = (name, price, cover, discount) => ({
    type: types.ADD_POST,
    name,
    price,
    cover,
    discount
});

export const editPost = (id) => ({
    type: types.EDIT_POST,
    id
});

export const updatePost = (id, newName, newPrice, newCover, newDiscount) => ({
    type: types.UPDATE_POST,
    id,
    newName,
    newPrice,
    newCover,
    newDiscount
});

export const deletePost = (id) => ({
    type: types.DELETE_POST,
    id: id
});
