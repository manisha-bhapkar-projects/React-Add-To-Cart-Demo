import { ADD_PRODUCT_BASKET } from './types';

export const addBasket = (productName) => {
    return (dispatch) => {
        console.log(productName);
        
            dispatch({
                type:  ADD_PRODUCT_BASKET,
                payload: productName
            });
    }
}