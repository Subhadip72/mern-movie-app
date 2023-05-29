export const addUserToLocalStorage = (user) => {
  return localStorage.setItem("user", JSON.stringify(user));
};

export const getUserFromLocalStorage = () => {
  const isUserPresent = localStorage.getItem("user");
  if (isUserPresent) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return null;
  }
};

export const removeUserFromLocalStorage = () => {
  return localStorage.removeItem("user");
};
