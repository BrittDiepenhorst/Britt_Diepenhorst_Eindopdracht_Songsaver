const initialState = {
    songs: [],
};

const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDSONG':
            console.log(state)
            return { ...state, song: action.payload };
        default:
            return state;
    }
};

export default songReducer;