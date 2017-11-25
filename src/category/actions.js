import * as actions from './constants';
import shortid from 'shortid';

export function addCategory(category){
    category._id = shortid.generate();
    category.timestamp = new Date();
    return{
        type: actions.CATEGORY_ADD,
        payload: category
    };
}

export function updateCategory(update){
    return {
        type: actions.CATEGORY_UPDATE,
        payload: update
    };
}

export function removeCategory(id){
    return {
        type: actions.CATEGORY_REMOVE,
        payload: id
    };
}

