import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetMethodPayment = () => {
  const data = useQuery(["methodPaymentList"], () =>
    axiosClient.get("/Setting/GetSettingList?groupSettingId=22")
  );

  return data;
};

export default useGetMethodPayment;