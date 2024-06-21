import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetDocumentType = () => {
  const data = useQuery(["documentType"], () =>
    axiosClient.get("/Setting/GetSettingList?groupSettingId=2")
  );

  return data;
};

export default useGetDocumentType;
