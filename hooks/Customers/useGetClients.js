import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetClients = ({ page, pageSize, searchBy, sortDirection, sortBy }) => {
  let urlString = `/Client/GetClientService?currentPage=${page}&pageSize=${pageSize}`;
  if (searchBy) {
    urlString += `&searchValue=${searchBy}`;
  }

  if (sortDirection && sortDirection.length > 1) {
    urlString += `&orderType=${sortDirection}`;
  }
  if (sortBy && sortBy.length > 1) {
    urlString += `&orderBy=${sortBy}`;
  }

  const data = useQuery(
    ["clientList", page, pageSize, searchBy, sortDirection, sortBy],
    () => axiosClient.get(urlString)
  );

  return data || {};
};
export default useGetClients;
