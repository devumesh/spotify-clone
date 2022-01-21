import { Avatar } from '@mui/material';
import { useDataLayerValue } from '../../DataLayer';
import './header.css';


const Header = () => {
    const {user} = useDataLayerValue()[0];

    const displayName = user?.display_name.length > 12 ? user?.display_name.substring(0,12)+'...' : user?.displayName;
    //console.log("User : ", user);
    return (
        <div className="flex justify-end">
            <div className="flex p-1 __user-info">
                <Avatar sx={{height: '20px', width: '20px' }} />
                <h3 className="px-2">{displayName}</h3>
            </div>
        </div>
    );
}

export default Header;