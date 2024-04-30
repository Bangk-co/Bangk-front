/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, WrapperPolicy } from "@/styles/Policy";
import { Header } from "@/components/Common/Header";
import { Div } from "@/styles/Common";
import useGetDocumentType from "@/hooks/Common/useGetDocumentType";
import useGetIndicatives from "@/hooks/Common/useGetIndicatives";
import { BackButton } from "@/components/Quote/BackButton/index.js";
import { UserForm } from "@/components/Policy/UserForm";
import { useDispatch, useSelector } from "react-redux";
import useGetLoanInsurancePolicyInfo from "@/hooks/Customers/useGetLoanInsurancePolicyInfo";
import { setRequestInfo } from "@/store/requests";
import dayjs from "dayjs";
import useUpdateClientInfo from "@/hooks/Customers/useUpdateClientInfo";
import { useQueryClient } from "react-query";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const UserInfoConfirmation = ({ isMobile }) => {
  const dispatch = useDispatch();
  const updateClient = useUpdateClientInfo();
  const router = useRouter();
  const { loanApplicationId } = router.query;
  const { selectedRequest } = useSelector((state) => state)?.requests;
  const requestId = loanApplicationId || selectedRequest
  const loanInsurancePolicyData =
    useGetLoanInsurancePolicyInfo(requestId);
  const { data, isSuccess } = loanInsurancePolicyData;
  const documentType = useGetDocumentType();
  const indicatives = useGetIndicatives();
  const { data: dataDocument, isSuccess: isSuccessDocument } = documentType;
  const { data: dataIndicatives, isSuccess: isSuccessIndicatives } =
    indicatives;
  const [documentTypeOptions, setDocumentTypeOptions] = useState([]);
  const [indicativesOptions, setIndicativesOptions] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [formInfo, setFormInfo] = useState({
    documentIdentificationTypeId: "",
    identificationNumber: "",
    name: "",
    lastName: "",
    countryCodePhoneId: "",
    phoneNumber: "",
    email: "",
    documentIssueDate: "",
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    if (isSuccess) {
      const info = data?.data.loanInsurancePolicies;
      dispatch(setRequestInfo(info));
      setFormInfo({
        documentIdentificationTypeId: info.documentIdentificationTypeId,
        identificationNumber: info.identificationNumber,
        name: info.name,
        lastName: info.lastName,
        countryCodePhoneId: info.countryCodePhoneId,
        phoneNumber: info.phoneNumber,
        email: info.email,
        documentIssueDate: dayjs(info.documentIssueDate),
      });
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isSuccessDocument && dataDocument?.data?.groupSettings.length > 0)
      setDocumentTypeOptions(
        dataDocument?.data?.groupSettings.map((ele) => ({
          label: ele.name,
          value: ele.id,
        }))
      );
  }, [dataDocument, isSuccessDocument]);

  useEffect(() => {
    if (isSuccessIndicatives && dataIndicatives?.data?.groupSettings.length > 0)
      setIndicativesOptions(
        dataIndicatives?.data?.groupSettings.map((ele) => ({
          label: `(${ele.code})`,
          value: ele.id,
        }))
      );
  }, [dataIndicatives, isSuccessIndicatives]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    const newInfo = { ...formInfo };

    newInfo[id] = value;
    setFormInfo(newInfo);
  };

  const handleSelect = (event) => {
    const { name, value } = event.target;
    const newInfo = { ...formInfo };

    newInfo[name] = value;
    setFormInfo(newInfo);
  };

  const handleChangeDate = (event) => {
    setFormInfo({ ...formInfo, documentIssueDate: event });
  };

  const handleContinue = () => {
    const info = data?.data.loanInsurancePolicies;
    updateClient.reset();
    updateClient.mutate(
      {
        clientId: info.clienId,
        formData: {
          name: formInfo?.name,
          lastName: formInfo?.lastName,
          documentTypeId: formInfo?.documentIdentificationTypeId,
          identificationNumber: formInfo?.identificationNumber,
          documentIssueDate: formInfo?.documentIssueDate,
          countryCode: formInfo?.countryCodePhoneId,
          phoneNumber: formInfo?.phoneNumber,
          birthDate: info?.birthDate,
          genderId: info?.genderId,
          email: formInfo?.email,
        },
      },
      {
        onSuccess: () => {
          router.push("/solicitar-poliza");
          queryClient.invalidateQueries(["clientInfo", info.clienId]);
        },
        onError: (err) => {
          err.response.data.errors.map((error) => {
            toast.error(error);
          });
        },
      }
    );
  };

  return (
    <Container>
      <Header isMobile={isMobile} />
      <WrapperPolicy>
        {!isMobile && (
          <BackButton isHovered={isHovered} setIsHovered={setIsHovered} />
        )}
        <Div justify="center" width="100%">
          <UserForm
            isMobile={isMobile}
            documentTypeOptions={documentTypeOptions}
            indicativesOptions={indicativesOptions}
            formInfo={formInfo}
            handleContinue={handleContinue}
            handleChange={handleChange}
            handleSelect={handleSelect}
            handleChangeDate={handleChangeDate}
          />
        </Div>
      </WrapperPolicy>
    </Container>
  );
};

export default UserInfoConfirmation;
