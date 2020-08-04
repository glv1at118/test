import React from 'react';
import PlayList from './components/PlayList.jsx';
import Favorite from './components/Favorite.jsx';
import Listened from './components/Listened.jsx';
import './styles/app.css';
import { reduxStore } from './redux/store.js';
import { loadMusicListAsync } from './redux/actions.js';

export default class App extends React.Component {
  componentDidMount() {
    reduxStore.dispatch(loadMusicListAsync());
  }
  render() {
    return (
      <div className="app">
        <PlayList />
        <Listened />
        <Favorite />
      </div>
    );
  }

}
