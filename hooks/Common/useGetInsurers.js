import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetInsurers = () => {
  const data = useQuery(["insurersList"], () =>
    axiosClient.get("/Setting/GetSettingList?groupSettingId=8")
  );

  return data;
};

export default useGetInsurers;