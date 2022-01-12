import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import './player.css';

const Player = () => {
    return ( 
        <>
            <div className="">
                <div className="flex __player-body">
                    <Sidebar />
                    <Body />
                </div>
                <Footer />
            </div>
        </>
    );
}
 
export default Player;