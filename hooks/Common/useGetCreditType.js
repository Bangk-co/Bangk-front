import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetCreditType = () => {
  const data = useQuery(["creditTypeList"], () =>
    axiosClient.get("/Setting/GetSettingList?groupSettingId=4")
  );

  return data;
};

export default useGetCreditType;
