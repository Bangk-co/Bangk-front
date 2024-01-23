import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetInsuranceValues = () => {
  const data = useQuery(["insuranceValues"], () =>
    axiosClient.get("/Setting/GetSettingList?groupSettingId=7")
  );

  return data;
};

export default useGetInsuranceValues;
