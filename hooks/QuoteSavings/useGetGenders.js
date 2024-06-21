import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetGenders = () => {
  const data = useQuery(["genderList"], () =>
    axiosClient.get("/Setting/GetSettingList?groupSettingId=5")
  );

  return data;
};

export default useGetGenders;
