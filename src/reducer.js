export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    token: null,
    playlistData: {},
    currentPlay: {}
};

const reducer = (state, action) => {
    console.log(action);


    // action.payload key is a variable
    switch(action.type) {
        case 'SET_USER':
            return {...state, user: action.user};
        case 'SET_TOKEN':
            return {...state, token: action.token};
        case 'SET_PLAYLIST':
            return {...state, playlists: action.playlists};
        case 'SET_PLAYLIST_SONGS':
            return {...state, playlistData: action.playlistData};
        case 'SET_CURRENT_PLAY':
            return {...state, currentPlay: action.currentPlay};
        case 'SET_PLAYING':
            return {...state, playing: action.playing};
        default:
            return state;
    }
}

export default reducer;