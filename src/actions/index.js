let nextSongID = 0;
export const addSong = (song) => {
    return {
        type: 'ADDSONG',
        payload: song, id: ++nextSongID,
    };
};