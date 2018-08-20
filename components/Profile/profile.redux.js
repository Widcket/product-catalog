// Actions
const SET_PROFILE = 'profile/SET_PROFILE';

// Action Creators
export function setProfile(profile) {
    return { type: SET_PROFILE, payload: profile };
}

// Reducer
const reducer = (state = {}, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return { ...state, profile: action.payload };
        default:
            return state;
    }
};

export default reducer;
