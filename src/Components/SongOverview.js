import React from 'react';
import SongForm from './SongForm';
import SongList from './SongList';

function SongOverview() {

    return (
        <div>
            <SongForm />
            <SongList />
        </div>
    );
};

export default SongOverview;