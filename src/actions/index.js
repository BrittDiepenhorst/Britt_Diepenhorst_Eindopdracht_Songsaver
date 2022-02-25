export const addSong = (song) => {
    return {
        type: 'ADDSONG',
        payload: song
    };
};
