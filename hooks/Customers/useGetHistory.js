import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetHistory = (clientId) => {
  let urlString = `/LoanApplicationStateHistory/GetLoanApplicationStateHistoryService?loanApplicationId=${clientId}`;

  const data = useQuery(["historyList", clientId], () =>
    axiosClient.get(urlString)
  );

  return data;
};

export default useGetHistory;
