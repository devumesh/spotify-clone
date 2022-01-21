// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndPoint = "https://accounts.spotify.com/authorize";
// const redirectUri = "http://localhost:3000/callback";
// const clientId = "9e18786031a948a3a12ac66600df04ed";
const {REACT_APP_REDIRECT_URI, REACT_APP_CLIENT_ID} = process.env;

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
};


export const loginUrl = `${authEndPoint}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URI}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;