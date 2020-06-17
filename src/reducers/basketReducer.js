import { ADD_PRODUCT_BASKET,  GET_NUMBERS_BASKET} from '../actions/types';

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products:{
        YellowTeddy: {
            name: "Yellow Teddy",
            price: 15.00,
            numbers: 0,
            inCart: false
        },

        PinkTeddy: {
            name: "Pink Teddy",
            price: 25.00,
            numbers: 0,
            inCart: false
        },

        WhiteTeddy: {
            name: "White Teddy",
            price: 10.00,
            numbers: 0,
            inCart: false
        },

        MixRosesBucky1: {
            name: "Mix Roses Bucky",
            price: 45.00,
            numbers: 0,
            inCart: false
        },

        MixRosesBucky2: {
            name: "Mix Roses Bucky",
            price: 35.00,
            numbers: 0,
            inCart: false
        },

        YellowRosesBucky: {
            name: "Yellow Roses Bucky",
            price: 25.00,
            numbers: 0,
            inCart: false
        },

        RedDollKeychain: {
            name: "Red Doll Keychain",
            price: 15.00,
            numbers: 0,
            inCart: false
        },

        PinkDollKeychain: {
            name: "Pink Doll Keychain",
            price: 10.00,
            numbers: 0,
            inCart: false
        },

        DollKeychain: {
            name: "Doll Keychain",
            price: 35.00,
            numbers: 0,
            inCart: false
        },

        MixFlowersBucky3: {
            name: "Mix Flowers Bucky",
            price: 25.00,
            numbers: 0,
            inCart: false
        },

        MixFlowersBucky4: {
            name: "Mix Flowers Bucky",
            price: 35.00,
            numbers: 0,
            inCart: false
        },

        MixFlowersBucky5: {
            name: "Mix Flowers Bucky",
            price: 25.00,
            numbers: 0,
            inCart: false
        }

      
    }

}

export default(state = initialState, action) => {
    switch(action.type){
        case ADD_PRODUCT_BASKET:
            let addQuantity = { ...state.products[action.payload]}
            // accessing all products array [action.payload]
            console.log(addQuantity);

            addQuantity.numbers += 1;
            addQuantity.inCart = true;

            console.log(addQuantity);
            
            return{
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products:{
                    ...state.products,
                    [action.payload]: addQuantity
                }
            }
            case GET_NUMBERS_BASKET:
                return{
                    ...state
                }
        default:
            return state;
    }
}