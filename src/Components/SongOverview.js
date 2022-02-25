import React from 'react';
import SongForm from './SongForm';
import SongList from './SongList';

function SongOverview() {

    return (
        <div>
            <SongForm />
            <table style={{ width: "100%" }}>
                <tr className="song-header">
                    <th className="song-row__item">Song</th>
                    <th className="song-row__item">Artist</th>
                    <th className="song-row__item">Genre</th>
                    <th className="song-row__item">Rating</th>
                </tr>
            </table>
            <SongList />
        </div>
    );
}


export default SongOverview;