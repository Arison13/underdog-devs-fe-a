import * as ACTIONS from '../actions/index';

const initialState = {
  auth: {
    // Okta will save a JWT in local storage
    // use the Okta library to decipher that JWT and get the user_id
    isAuthenticated: false,
    profile_id: null,
  },
  userProfile: {
    // when user hits dashboard, make API call to [GET] /profile/:id
    // first_name: 'Test',
    // last_name: 'Test',
    // role_id: 3,
    // ...etc.
  },
  lifecycle: {
    // set to true when API call starts, set to false when API call concludes
    isFetching: false,
  },
  errors: [
    /* TODO: implement a way to track errors */
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_FETCH_START:
      return { ...state, lifecycle: { ...state.lifecycle, isFetching: true } };
    case ACTIONS.SET_FETCH_ERROR:
      return { ...state, errors: [action.payload, ...state.errors] };
    case ACTIONS.SET_FETCH_END:
      return { ...state, lifecycle: { ...state.lifecycle, isFetching: false } };
    case ACTIONS.SET_PROFILE_ID:
      return {
        ...state,
        auth: {
          ...state.auth,
          isAuthenticated: true,
          profile_id: action.payload,
        },
      };
    case ACTIONS.SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload, // do not persist previous state.userProfile
      };
    default:
      return state;
  }
};

export default userReducer;
