import React from 'react';
import { useSelector } from 'react-redux';

function SongList() {

    const songs = useSelector((state) => state.songs.songs);

    const songRow = songs.map(song => (
        <tr>
            <td key={song.songTitle}>{song.songTitle}</td>
            <td key={song.artistName}>{song.artistName}</td>
            <td key={song.genre}>{song.genre}</td>
            <td key={song.rating}>{song.rating}</td>
            <td key={song.id}><button>Delete Song</button></td>
        </tr>
    ));

    return (
        <table className="SongList">
            <thead>
                <tr className="song-header">
                    <th className="song-row__item">Song</th>
                    <th className="song-row__item">Artist</th>
                    <th className="song-row__item">Genre</th>
                    <th className="song-row__item">Rating</th>
                </tr>
            </thead>

            <tbody>
                {songRow}
            </tbody>

        </table>
    )
};

export default SongList;