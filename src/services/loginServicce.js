import * as ultils from "../ultils/common";
import { ROLE, ROLES } from "../constants";
const loginService = (function() {
  const login = data => {
    const { username, password } = data;
    if ((username === "test", password === "test")) {
      ultils.setToken("Khanh Tuong");
      ultils.setLocalStorage(ROLE, ROLES.USER);
      return true;
    } else if ((username === "admin ", password === "admin")) {
      ultils.setToken("Khanh Tuong");
      ultils.setLocalStorage(ROLE, ROLES.ADMIN);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    ultils.clearToken();
  };

  return {
    login,
    logout
  };
})();

export default loginService;
