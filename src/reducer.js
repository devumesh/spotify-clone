export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    token: null
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
        default:
            return state;
    }
}

export default reducer;