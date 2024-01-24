import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetClients = ({ page, pageSize, searchBy, sortDirection, sortBy }) => {
  let urlString = `/Client/GetClientService?currentPage=${page}&pageSize=${pageSize}`;
  if (searchBy) {
    urlString += `&searchValue=${searchBy}`;
  }

  const data = useQuery(["clinicList", page, pageSize, searchBy], () =>
    axiosClient.get(urlString)
  );

  return data || {};
};
export default useGetClients;
