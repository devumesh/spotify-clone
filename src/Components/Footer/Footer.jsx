import './footer.css';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { Slider } from '@mui/material';
import { useState } from 'react';

const Footer = () => {
    const [volume, setVolume] = useState(0);

    const handleVolumeChange = (e, value) => {
        setVolume(value);
    }
    return ( 
        <>
        <div className="fixed flex justify-between gap-3 bottom-0 w-full text-white __footer">
            <div className="flex items-center  __left-region">
                <img src="https://i.scdn.co/image/ab67616d00004851b61a7d4c017c37ca46e19f8d" alt='Song-Poster' className="__song-poster-img" />
                <div className="px-3">
                    <h3 className="font-semibold">Song title</h3>
                    <p className="font-thin __artist-name">Singer Name</p>
                </div>
            </div>
            <div className="__center-region">
                <div className="grid grid-cols-5 __play-controls">
                    <ShuffleIcon />
                    <SkipPreviousIcon />
                    <PlayCircleIcon className="__play-button" />
                    <SkipNextIcon />
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