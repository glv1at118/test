import React from 'react';
import '../styles/listened.css';
import { reduxStore } from '../redux/store.js';
import { toggleListen, toggleFav } from '../redux/actions.js';

export default class Listened extends React.Component {
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
            <div id="listened">
                <div className="listhead">Listened manager</div>
                <ul>
                    {
                        reduxStore.getState().musicList.map((item, index) => {
                            if (item.listened) {
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