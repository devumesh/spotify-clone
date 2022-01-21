import { useEffect } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import { getTokenFromUrl } from './Components/Login/SpotifyLogin';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Components/Player/Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect (() => {
    const _token = getTokenFromUrl().access_token;
    
    if (_token) {
      dispatch({type: 'SET_TOKEN', token: _token});
      spotify.setAccessToken(_token);

      spotify.getMe().then ((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      }).catch (err => console.log("Error in fetching data from Spotify: ", err));

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLIST',
          playlists: playlists
        })
      }).catch( err => console.log("Error in fetching the playlist: ", err));

      spotify.getPlaylist('37i9dQZF1DX1UGmKmt2DtZ').then(data => {
        dispatch({
          type: 'SET_PLAYLIST_SONGS',
          playlistData: data
        })
      }).catch( err => console.log("Error in updating the songs of playlist: ", err));
    }
  }, [dispatch]);

  return (
    <>
      {token?<Player spotify={spotify} />:<Login />}
    </>
  );
}

export default App;
