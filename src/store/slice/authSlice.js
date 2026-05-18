import { getUserInfoFromToken, isTokenExpired } from '../../utility/jwtUtility';
import { createSlice } from '@reduxjs/toolkit';

const STORAGE_KEYS = {
  TOKEN: 'token-mango',
  USER: 'user-mango',
};

const getInitialAuthState = () => {
  const storedToken = localStorage.getItem(STORAGE_KEYS.TOKEN);
  const storedUser = localStorage.getItem(STORAGE_KEYS.USER);

  // Clear invalid token
  if (
    !storedToken ||
    storedToken === undefined ||
    storedToken === null ||
    isTokenExpired(storedToken)
  ) {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);

    return {
      user: null,
      token: null,
      isAuthenticated: false,
    };
  }

  let user = null;
  if (storedUser && storedUser !== undefined && storedUser !== null) {
    try {
      user = JSON.parse(storedToken);
    } catch {
      user = getUserInfoFromToken(storedToken);
      if (user) {
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
      }
    }
  }
  return {
    user,
    storedToken,
    isAuthenticated: !!storedToken && !!user,
  };
};

const authSlice = createSlice({
  name: 'auth',
  initialState: { ...getInitialAuthState() },
  reducers: {
    setAuth: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = !!(user && token);

      if (token) localStorage.setItem(STORAGE_KEYS.TOKEN, token);
      if (user) localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
