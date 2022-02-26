import React from 'react';
import { useSelector } from 'react-redux';

function SongList() {
    const songs = useSelector((state) => state.songs.songs);

    // hoe krijg ik alle songs in de DOM?

    return (

        songs.map(song => (
            <div>
                <table className="Songtable">
                    <tr className="song-header">

                        <th className="song-row__item">Song</th>
                        <td>{song.songTitle}</td>

                        <th className="song-row__item">Artist</th>
                        <td>{song.artistName}</td>

                        <th className="song-row__item">Genre</th>
                        <td>{song.genre}</td>

                        <th className="song-row__item">Rating</th>
                        <td>{song.rating}</td>
                    </tr>
                </table>
            </div>
        ))
    )
}

export default SongList;