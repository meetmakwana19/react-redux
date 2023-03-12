// REDUCER 1 FILE :

const initialState = 0;

// reducer function
const changeNum = (state = initialState, action) => {
    switch (action.type) {
        // case "INCREMENT": return state + action.payload;
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        default: return state;
    }
}

export default changeNum;