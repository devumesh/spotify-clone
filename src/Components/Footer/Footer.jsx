import './footer.css';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { Slider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDataLayerValue } from '../../DataLayer';

const Footer = ({spotify}) => {
    const [{playing, currentPlay}, dispatch] = useDataLayerValue();
    
    useEffect (() => {
        spotify.getMyCurrentPlaybackState().then((data) => {
            dispatch(
            {
                type: "SET_PLAYING",
                playing: data.is_playing
            });
            dispatch(
            {
                type: "SET_CURRENT_PLAY",
                currentPlay: data.item
            });
        })
        .catch(err => alert(err));
    }, [spotify, dispatch]);

    // handling volume UI
    const [volume, setVolume] = useState(0);
    const handleVolumeChange = (e, value) => {
        setVolume(value);
    }

    // handling play and pause
    const handlePlayPause = () => {
        if (playing) {
            spotify.pause();
            dispatch(
            {
                type: "SET_PLAYING",
                playing: false
            });
        }
        else {
            spotify.play();
            dispatch(
            {
                type: "SET_PLAYING",
                playing: true
            });
        }
    };

    const myCurrPlayState = () => {
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
    }

    // handling songs skipping
    const skipNext = () => {
        spotify.skipToNext().catch(err => alert("Skip Next: ", err));
        
        setTimeout(() => {
            myCurrPlayState()
        }, 500);
    };

    const skipPrev = () => {
        spotify.skipToPrevious().catch(err => alert("Skip Previous: ", err));
        
        setTimeout(() => {
            myCurrPlayState();
        }, 500);
    };
    
    return ( 
        <>
        <div className="fixed flex justify-between gap-3 bottom-0 w-full text-white __footer">
            <div className="flex items-center  __left-region">
                <img src={currentPlay?.album?.images[2].url} alt='Song-Poster' className="__song-poster-img" />
                <div className="px-3">
                    <h3 className="font-semibold">{currentPlay?.name}</h3>
                    <p className="font-thin __artist-name">{currentPlay?.artists?.map(item => item.name).join(', ')}</p>
                </div>
            </div>
            <div className="__center-region">
                <div className="grid grid-cols-5 __play-controls">
                    <ShuffleIcon />
                    <SkipPreviousIcon onClick={skipPrev} />
                    {playing ? <PauseCircleIcon className="__play-button" onClick={handlePlayPause} /> : <PlayCircleIcon className="__play-button" onClick={handlePlayPause} />}
                    <SkipNextIcon onClick={skipNext} />
                    <RepeatIcon />
                </div>
            </div>
            <div className="flex items-center justify-end __right-region">
                <div className="flex">
                    <PlaylistPlayIcon className="mx-2" />
                    <div className="flex gap-2 __volume-controls">
                        {volume >= 60 ? <VolumeUpOutlinedIcon className='mx-2' /> : <VolumeDownOutlinedIcon className='mx-2' /> }
                        <Slider aria-label="Volume" value={volume} onChange={handleVolumeChange} className="__volume-slider" />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Footer;