import { initialState } from './initialState.js';
import clonedeep from 'lodash.clonedeep';

function myReducer(previousState = initialState, action) {
    let nextState = clonedeep(previousState);
    switch (action.type) {
        case "LOAD_MUSIC_LIST":
            let myArr = [];
            let list = action.musicArr;
            for (let i = 0; i < list.length; i++) {
                let obj = {
                    artist: "",
                    track: "",
                    favourite: false,
                    listened: false,
                    id: 0
                }
                obj.artist = list[i].artist;
                obj.track = list[i].track;
                obj.favourite = list[i].favourite;
                obj.listened = list[i].listened;
                obj.id = list[i].id - 1;
                myArr.push(obj);
            }
            nextState.musicList = myArr;
            return nextState;
        case "TOGGLE_LISTEN":
            nextState.musicList[action.id].listened = !nextState.musicList[action.id].listened;
            return nextState;
        case "TOGGLE_FAVORITE":
            nextState.musicList[action.id].favourite = !nextState.musicList[action.id].favourite;
            return nextState;
        default:
            return previousState;
    }
}

export default myReducer;