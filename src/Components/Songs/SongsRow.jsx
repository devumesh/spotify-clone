import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './SongsRow.css';

const SongsRow = ({track, playSong}) => {
    const ms = track.duration_ms;
    let min = Math.floor((ms/1000/60) << 0), sec = String(Math.floor((ms/1000) % 60)).padStart(2, '0');
    return ( 
        <>
            <div className="grid gap-4 items-center grid-cols-12 __songs-row">
                <PlayArrowIcon className="mx-auto cursor-pointer" onClick={() => playSong(track.uri)} />
                <img src={track.album.images[2].url} alt="" className="__songs-img" />
                <div className="col-span-4 __songs-title">
                    <h1 className="">{track.name}</h1>
                    <p className="">{track.artists.map(item => item.name).join(', ')}</p>
                </div>
                <h1 className="col-span-4 __songs-album">{track.album.name}</h1>
                <FavoriteBorderIcon className="mx-auto" />
                <h1 className="__songs-time">{`${min}:${sec}`}</h1>
            </div>
        </>
    );
}
 
export default SongsRow;