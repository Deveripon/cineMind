const initialValue = {
    cartData: [],
};

const movieCartReducerFunction = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            return {
                ...state,
                cartData: [...state.cartData, action.payload],
            };
        }
        case "REMOVE_FROM_CART": {
            return {
                ...state,
                cartData: state.cartData.filter(
                    (item) => item.id !== action.payload
                ),
            };
        }

        default:
            break;
    }
};

export { initialValue, movieCartReducerFunction };

