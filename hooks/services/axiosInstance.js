import axios from "axios";

const axiosClient = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "https://fraktal-bangk-api.azurewebsites.net/api",
});

const getLocalUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return user;
};

const deleteLocalUser = () => {
  localStorage.removeItem("user");
};

const setLocalUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const isRefresTokenURL = (url) => {
  return url.includes("/RefreshToken");
};

axiosClient.interceptors.request.use(
  (config) => {
    const user = getLocalUser();
    const isRefreshTokenUrl = isRefresTokenURL(config?.url);

    if (user) {
      if (isRefreshTokenUrl) {
        config.headers.Authorization = `Bearer ${user.RefreshTokenValue}`;
      } else {
        config.headers.Authorization = `Bearer ${user}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalConfig = error.config;

    if (error?.response) {
      // Access Token was expired
      const isErrorFromRefresh = isRefresTokenURL(
        error?.response?.request?.responseURL
      );

      if (
        error?.response?.status === 401 &&
        !originalConfig._retry &&
        !isErrorFromRefresh
      ) {
        originalConfig._retry = true;
        deleteLocalUser();
        // try {
        //   const response = await refreshToken();
        //   const user = await response.data;
        //   setLocalUser(user);

        //   axiosClient.defaults.headers.common.Authorization = `Bearer ${user.TokenValue}`;

        //   return axiosClient(originalConfig);
        // } catch (_error) {
        //   deleteLocalUser();
        //   return Promise.reject(_error);
        // }
      }
    }

    return Promise.reject(error);
  }
);

export { axiosClient, deleteLocalUser, setLocalUser, getLocalUser };
