import './sidebar.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDataLayerValue } from '../../DataLayer';

const SidebarOption = ({option, Icon, playlist, fetchPlaylists}) => {
    return (
        <div className="flex cursor-pointer hover:text-white __options">
            { Icon && <Icon className="__options-icon" /> }
            { option && <h1 className="">{option}</h1> }
            { playlist && <p className="text-sm py-1" onClick={() => fetchPlaylists(playlist?.id)}>{playlist?.name}</p> }
        </div>
    );
}

const Sidebar = ({fetchPlaylists}) => {
    const {playlists}= useDataLayerValue()[0];

    return ( 
        <>
        <div className='text-white __sidebar'>
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify Logo" className="w-9/12 block" />
            <div className="">
                <SidebarOption Icon={HomeOutlinedIcon} option={'Home'} />
                <SidebarOption Icon={SearchIcon} option={'Search'} />
                <SidebarOption Icon={LibraryMusicOutlinedIcon} option={'Your Library'} />
            </div>
            <div className="__options-playlist"> 
                <SidebarOption Icon={AddBoxRoundedIcon} option={'Create Playlist'} />
            </div>
            <div className="__options-liked"> 
                <SidebarOption Icon={FavoriteIcon} option={'Liked Songs'} />
            </div>
            <div className="__playlist">
                { playlists?.items?.map(item => {
                    return <SidebarOption playlist={item} fetchPlaylists={fetchPlaylists} key={item.id} />
                }) }
            </div>
        </div>
        </>
    );
}
 
export default Sidebar;