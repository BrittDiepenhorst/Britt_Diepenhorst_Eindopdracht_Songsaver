import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSong } from '../actions/index';

function SongForm() {

    const dispatch = useDispatch();

    const [songToAdd, setSongToAdd] = useState({
        songTitle: "",
        artistName: "",
        genre: "",
        rating: 0,
    });

    const handleChange = (e) => {
        console.log('hello')
        setSongToAdd((prev) => ({
            ...prev,
            [e.target.name]: (e.target.value),
        }))
    };

    const handleClick = () => {
        dispatch(addSong(songToAdd));
    };

    const songs = useSelector(state => state.songs);

    return (
        <div>
            <input type="text" name="songTitle" placeholder="Title" value={songToAdd.songTitle} onChange={handleChange} />
            <input type="text" name="artistName" placeholder="Artist Name" value={songToAdd.artistName} onChange={handleChange} />
            <select name="genre" placeholder="Genre" value={songToAdd.genre} onChange={handleChange}>
                <option vale="no-value">Select Genre</option>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="Jazz">Jazz</option>
            </select>
            <input type="text" name="rating" placeholder="Rating" value={songToAdd.rating} onChange={handleChange} />

            <button onClick={() => handleClick}>Submit</button>

            <h1>Songs: {songs}</h1>
        </div>
    )
};

export default SongForm;