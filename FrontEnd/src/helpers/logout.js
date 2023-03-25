export const TokenExpired = () => {
  localStorage.clear();
  window.location = "/";
};
