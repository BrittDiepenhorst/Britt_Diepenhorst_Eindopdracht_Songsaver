import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
        console.log(songToAdd)
        setSongToAdd((prev) => ({
            ...prev,
            [e.target.name]: (e.target.value),
        }))
    };

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(addSong(songToAdd));
    };

    return (
        <div className="Songform">
            <input type="text" name="songTitle" placeholder="Title" value={songToAdd.songTitle} onChange={handleChange} />
            <input type="text" name="artistName" placeholder="Artist Name" value={songToAdd.artistName} onChange={handleChange} />
            <select name="genre" placeholder="Genre" value={songToAdd.genre} onChange={handleChange}>
                <option value="No Genre">Select Genre</option>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="Jazz">Jazz</option>
            </select>
            <select type="text" name="rating" placeholder="Rating" value={songToAdd.rating} onChange={handleChange}>
                <option value="0"></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button onClick={handleClick}>Add Song</button>

        </div>
    )
};

export default SongForm;