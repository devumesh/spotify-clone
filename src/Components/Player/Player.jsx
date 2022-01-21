import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import './player.css';
import { useDataLayerValue } from '../../DataLayer';

const Player = ({ spotify }) => {
    const dispatch = useDataLayerValue()[1];

    const fetchPlaylists = (id) => {
        spotify.getPlaylist(id).then(data => {
            dispatch({
                type: 'SET_PLAYLIST_SONGS',
                playlistData: data
            });
        })
        .catch(err => console.log("Error in updating the songs from playlist"));
    }

    
    const playSong = (uri) => {
        spotify.play({uris: [uri]}).then((play) => {
            setTimeout(() => {
                spotify.getMyCurrentPlayingTrack().then(data => {
                    dispatch(
                        {
                            type: "SET_CURRENT_PLAY",
                            currentPlay: data.item
                        }
                    );
                    dispatch(
                        {
                            type: "SET_PLAYING",
                            playing: true   
                        }
                    );
                })
                .catch(err => alert("Failed to skip to next ", err));
            }, 500);
        })
        .catch(err => alert("Error in playing song: ", err));
    }

    return ( 
        <>
            <div className="__player-main">
                <div className="flex __player-body">
                    <Sidebar fetchPlaylists={fetchPlaylists} />
                    <Body playSong={playSong} />
                </div>
                <Footer spotify={spotify} />
            </div>
        </>
    );
}
 
export default Player;