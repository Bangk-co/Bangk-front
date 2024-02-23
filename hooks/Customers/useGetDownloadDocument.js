import { useQuery } from "react-query";
import { axiosClient } from "../services/axiosInstance";

const useGetDownloadDocument = (documentId) => {
  let urlString = `/LoanApplicationDocument/GetDownloadDocument?documentId=${documentId}`;

  const data = useQuery(["downloadDocument", documentId], () =>
    axiosClient.get(urlString)
  );

  return data || {};
};
export default useGetDownloadDocument;
