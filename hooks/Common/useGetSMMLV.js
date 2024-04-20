import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetSMMLV = () => {
  const data = useQuery(["smmlv"], () =>
    axiosClient.get("/Setting/GetSettingList?groupSettingId=11")
  );

  return data;
};

export default useGetSMMLV;
