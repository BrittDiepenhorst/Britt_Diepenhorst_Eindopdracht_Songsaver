const initialState = {
    songs: []
};

const songReducer = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'ADDSONG':
            return {
                ...state,
                songs: [...state.songs, action.payload]
            };
        case 'DELETESONG':
            return {
                ...state,
                songs: state.songs.filter(song => song.id !== action.payload)
            };
        default:
            return state;
    }
};

export default songReducer;
