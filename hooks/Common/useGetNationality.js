import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetNationality = () => {
  const data = useQuery(["nationalityList"], () =>
    axiosClient.get("/Country/GetNationalityList")
  );

  return data;
};

export default useGetNationality;
