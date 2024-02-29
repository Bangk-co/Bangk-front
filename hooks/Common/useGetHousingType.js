import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetHousingType = () => {
  const data = useQuery(["housingTypeList"], () =>
  axiosClient.get("/Setting/GetSettingList?groupSettingId=13")
  );

  return data;
};

export default useGetHousingType;
