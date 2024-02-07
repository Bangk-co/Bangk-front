import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetApplicationDocuments = (clientId) => {
  let urlString = `/LoanApplicationDocument/GetLoadApplicationDocumentByClient?ClientId=${clientId}`;

  const data = useQuery(["applicationDocumentsList", clientId], () =>
    axiosClient.get(urlString)
  );

  return data || {};
};
export default useGetApplicationDocuments;
