export const isUserLoggedIn = () => {
  const token = sessionStorage.getItem("token");
  return !!token;
};

export const logoutUser = () => {
  sessionStorage.removeItem("token");

  //   localStorage.removeItem("react-use-cart");
};
