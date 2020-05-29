import { getToken } from "../../ultils/common";

export default {
  isLoading: false,
  isAuthen: false || getToken(),
  user: {
    name: "" || getToken()
  }
};
