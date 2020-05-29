import router from "../router/router.js";
const TOKEN = "TOKEN";

export const redirectTo = path => {
  if (!path) return;
  router.push(path);
};

export const cloneDeepObj = obj => {
  return JSON.parse(JSON.stringify(obj));
};

export const setToken = data => {
  localStorage.setItem(TOKEN, data);
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getLocalStorage = key => {
  return localStorage.getItem(key);
};
export const getToken = () => {
  return localStorage.getItem(TOKEN);
};

export const clearToken = () => {
  localStorage.clear();
};

export const shareData = [];
