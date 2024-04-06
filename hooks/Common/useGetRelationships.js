import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetRelationships = () => {
  const data = useQuery(["relationshipList"], () =>
    axiosClient.get("/Setting/GetSettingList?groupSettingId=16")
  );

  return data;
};

export default useGetRelationships;
