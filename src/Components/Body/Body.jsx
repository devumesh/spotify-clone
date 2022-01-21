import { useDataLayerValue } from '../../DataLayer';
import Header from '../Header/Header';
import './body.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongsRow from '../Songs/SongsRow';

const Body = ({playSong}) => {
    const {playlistData} = useDataLayerValue()[0];

    return ( 
        <>
        <div className="__body">
            <Header />
            <div className="py-5">
                <div className="flex items-end __banner">
                    {playlistData.images && <img src={playlistData.images[0].url} alt="Playlist Banner" className='__playlist-banner-img' />}
                    <div className="__banner-playlist-info">
                        <p className="font-semibold text-xs uppercase">Playlist</p>
                        <h1 className="__playlist-title">{playlistData?.name}</h1>
                        <p className="__playlist-desc">{playlistData?.description}</p>
                    </div>
                </div>
                <div className="gap-5 __playlist-controls">
                    <PlayCircleIcon className='__controls-play-btn' />
                    <FavoriteBorderIcon className='__controls-fav-btn' />
                    <MoreHorizIcon className='__controls-menu-btn' />
                </div>
                <div className="songsRow">
                    {playlistData?.tracks && playlistData?.tracks.items && playlistData?.tracks.items.map(item => {
                        return <SongsRow track={item.track} key={item.track.id} playSong={playSong} />
                    })
                    }
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Body;