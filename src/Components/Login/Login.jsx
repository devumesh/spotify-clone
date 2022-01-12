import './Login.css';
import { loginUrl } from './SpotifyLogin';

const Login = () => {
    return ( 
        <div className="flex items-center h-screen bg-black flex-col w-full">
            <div className="w-1/4 my-2 sm:w-1/2">
                <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify Logo" className="w-full" />
            </div>
            <div className="w-1/4 text-center sm:w-1/2 ">
                <a href={loginUrl} className="uppercase text-white inline-block _login-btn">Login with spotify</a>
            </div>
        </div>
     );
}
 
export default Login;