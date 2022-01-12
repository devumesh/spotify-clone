import React from "react";
import './SecLogin.css';
import { FaFacebook, FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SecLogin = () => {
    return ( 
    <div className="lg:container mx-auto px-4">
        <div className="border-b-2 w-full">
            <div className="w-36 sm:w-48 mx-auto py-5">
                <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png" alt="Spotify logo" className="w-full" />
            </div>
        </div>
        {/* Login options */}
        <div className="w-full">
            <div className="sm:w-1/2 mx-auto w-full">
                <h3 className="font-bold py-4 text-center">To continue, log in to Spotify.</h3>
                <div className="w-full">
                    <div className="px-5 py-3 flex justify-center uppercase mx-auto text-white cursor-pointer _login-width _facebook-color">
                        <FaFacebook className="_login-icon" />
                        <p className="">Continue with Facebook</p>
                    </div>
                    <div className="px-5 py-3 flex justify-center uppercase mx-auto bg-black text-white cursor-pointer _login-width">
                        <FaApple className="_login-icon" />
                        <p className="">Continue with Apple</p>
                    </div>
                    <div className="px-5 py-3 flex justify-center uppercase mx-auto bg-gray-600 text-white cursor-pointer _login-width">
                        <FcGoogle className="_login-icon" />
                        <p className="">Continue with Google</p>
                    </div>
                    <div className="px-5 py-3 flex justify-center uppercase mx-auto border-2 border-black bg-white cursor-pointer _login-width">
                        <p className="">Continue with phone number</p>
                    </div>
                </div>
            </div>
            <div className="sm:w-1/2 mx-auto w-full text-center my-2 _login-or">
                <span className="inline-block px-5 py-3 font-bold bg-white">OR</span>
            </div>
            <div className="sm:w-1/2 mx-auto w-full">
                <form action="" className=" _width-450 flex flex-col mx-auto">
                    <input type="email" className="border-2 border-gray-400 py-2 px-3 w-full my-1" placeholder="Email address or username" />
                    <input type="password" className="border-2 border-gray-400 py-2 px-3 w-full my-1" placeholder="Password" />
                    <div className="flex flex-row justify-between align-center">
                        <div className="_remember-me">
                            <input type="checkbox" name="Remember-Me" id="remember-me" /><label htmlFor="remember-me" className="text-sm">Remeber me</label>
                        </div>
                        <button className="text-white uppercase cursor-pointer _login-btn">Log in</button>
                    </div>
                </form>
            </div>
            <div className="text-center font-bold underline _spotify-color">
                <a href="#">Forget password?</a>
            </div>
        </div>
    </div> 
    );
}
 
export default SecLogin;