import React from 'react';
import '../styles/favorite.css';
import { reduxStore } from '../redux/store.js';
import { toggleListen, toggleFav } from '../redux/actions.js';

export default class Favorite extends React.Component {
    constructor(props) {
        super(props);
    }

    handleListen = (id) => {
        reduxStore.dispatch(toggleListen(id));
    }

    handleFavorite = (id) => {
        reduxStore.dispatch(toggleFav(id));
    }

    render() {
        return (
            <div id="favorite">
                <div className="listhead">Favorite manager</div>
                <ul>
                    {
                        reduxStore.getState().musicList.map((item, index) => {
                            if (item.favourite) {
                                return (
                                    <li key={index}>
                                        <div className="leftbox">
                                            <div className="artist">{item.artist}</div>
                                            <div className="track">{item.track}</div>
                                        </div>
                                        <div className="rightbox">
                                            <button onClick={() => this.handleListen(item.id)}>listen</button>
                                            <button onClick={() => this.handleFavorite(item.id)}>favorite</button>
                                        </div>
                                    </li>
                                );
                            } else {
                                return null;
                            }
                        })
                    }
                </ul>
            </div>
        );
    }
}