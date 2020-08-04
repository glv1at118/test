import axios from 'axios';

function toggleListen(id) {
    return {
        type: "TOGGLE_LISTEN",
        id: id
    };
}

function toggleFav(id) {
    return {
        type: "TOGGLE_FAVORITE",
        id: id
    };
}

function loadMusicList(arr) {
    return {
        type: "LOAD_MUSIC_LIST",
        musicArr: arr
    };
}

function loadMusicListAsync() {
    return function (dispatch, getState) {
        axios.get('http://localhost:3000/playlist')
            .then(function (response) {
                let musicArr = response.data;
                dispatch(loadMusicList(musicArr));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}


export {
    loadMusicListAsync, toggleListen, toggleFav
};