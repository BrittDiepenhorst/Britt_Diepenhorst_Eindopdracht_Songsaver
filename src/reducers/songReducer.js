const initialState = {
    songs: []
};

const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDSONG':
            return {
                ...state,
                songs: [...state.songs, action.payload]
            };
        default:
            return state;
    }
};

export default songReducer;