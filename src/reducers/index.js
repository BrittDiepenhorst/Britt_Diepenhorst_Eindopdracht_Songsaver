import songReducer from './songReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    addSong: songReducer,
});

export default allReducers;