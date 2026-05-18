import { jwtDecode } from 'jwt-decode';

const decodeJTW = (token) => {
  try {
    return jwtDecode(token);
  } catch {
    return null;
  }
};

export const isTokenExpired = (token) => {
  const decodedToken = decodeJTW(token);
  return !decodedToken?.exp || decodedToken.exp * 1000 < Date.now();
};

export const getUserInfoFromToken = (token) => {
  const decodedToken = decodeJTW(token);

  if (!decodedToken) return null;

  return {
    id: decodedToken.id,
    name: decodedToken.fullname,
    email: decodedToken.email,
    role: decodedToken.role,
    exp: decodedToken.exp,
  };
};
