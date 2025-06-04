import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetPetType = () => {
  const data = useQuery(["petsTypeList"], () =>
    axiosClient.get("/Setting/GetSettingList?groupSettingId=23")
  );

  return data;
};

export default useGetPetType;