/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Header } from "@/components/Common/Header";
import { Div } from "@/styles/Common";
import { Container, WrapperQuote } from "@/styles/Quote";
import { BackButton } from "@/components/Quote/BackButton/index.js";
import { CreditForm } from "@/components/Quote/CreditForm";
import useGetBanks from "@/hooks/Common/useGetBanks";
import useGetCreditType from "@/hooks/Common/useGetCreditType";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import useCreateClient from "@/hooks/QuoteSavings/useCreateUser";
import { resetInitData, setOtpDate } from "@/store/balance";
import toast from "react-hot-toast";

const CreditData = ({ isMobile, isTablet }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const create = useCreateClient()
  const { userInfo, initData, termsDate, otpDate } = useSelector((state) => state)?.balance
  const [isHovered, setIsHovered] = useState(false);
  const banksList = useGetBanks()
  const creditTypeList = useGetCreditType()
  const { data, isSuccess } = banksList
  const { data: dataCT, isSuccess: isSuccessCT} = creditTypeList
  const [banksOptions, setBanksOptions] = useState([])
  const [creditTypeOptions, setCreditTypeOptions] = useState([])
  const [forceUpdate, setForceUpdate] = useState(false)
  const [creditInfo, setCreditInfo] = useState({
    bankId: null,
    loanTypeId: null,
    loanNumber: "",
  })
  const [documents, setDocuments] = useState([
    { id: "bankStatementFile", label: "Último extracto*", value: null, error: false },
    { id: "identificationFile", label: "Documento de identidad*", value: null, error: false }
  ])

  useEffect(() => {
    if (isSuccess && data?.data?.groupSettings.length > 0)
      setBanksOptions(data?.data?.groupSettings.map((ele) => ({
        label: ele.name,
        value: ele.id
      })))
  }, [data, isSuccess])

  useEffect(() => {
    if (isSuccessCT && dataCT?.data?.groupSettings.length > 0)
      setCreditTypeOptions(dataCT?.data?.groupSettings.map((ele) => ({
        label: ele.name,
        value: ele.id
      })))
  }, [dataCT, isSuccessCT])

  const handleSelect = (event) => {
    const { name, value } = event.target;
    const newInfo = { ...creditInfo }

    newInfo[name] = value
    setCreditInfo(newInfo)
  }

  const handleChange = (event) => {
    const { id, value } = event.target;
    const newInfo = { ...creditInfo }

    newInfo[id] = value.replace(/\D/g, '');
    setCreditInfo(newInfo)
  }

  const optionsTypeFile = [
    "application/pdf",
    "image/png",
    "image/jpg",
    "image/jpeg"
  ]

  const maxSize = 3000000

  const handleFile = (file, id) => {
    const newInfo = [...documents]
    const docIndex = newInfo.findIndex(ele => ele.id === id)
    
    if (file?.type && file?.size) {
      if (optionsTypeFile.includes(file.type) && file.size < maxSize) {
        newInfo[docIndex].value = file
        newInfo[docIndex].error = false;
      } else {
        newInfo[docIndex].error = true;
      }
      setDocuments(newInfo)
    }
  }

  const handleDelete = (id) => {
    const newInfo = [...documents]
    const docIndex = newInfo.findIndex(ele => ele.id === id)

    newInfo[docIndex].value = null
    setDocuments(newInfo)
    setForceUpdate(!forceUpdate)
  }

  const handleBack = () => {
    router.push("/cotiza-tu-ahorro/diligencia-tus-datos")
  }

  const handleCreate = () => {
    const bankStatementFile = documents.find((ele) => ele.id === "bankStatementFile")?.value
    const identificationFile = documents.find((ele) => ele.id === "identificationFile")?.value

    create.reset();
    create.mutate(
      { 
        ...userInfo, 
        ...creditInfo, 
        ...initData, 
        termsDate: termsDate,
        bankStatementFile: bankStatementFile,
        identificationFile: identificationFile,
        validateClientOtp: otpDate
      },
      {
        onSuccess: (res) => {
          dispatch(resetInitData());
          dispatch(setOtpDate(null));
          router.push("/cotiza-tu-ahorro/creacion-exitosa");
        },
        onError: (err) => {
          err.response.data.map((error) => {
            toast.error(error);
          });
        },
      }
    );
  }

  return (
    <Container>
      <Header isMobile={isMobile} />
      <WrapperQuote>
        {!isMobile &&
          <BackButton isHovered={isHovered} setIsHovered={setIsHovered} />
        }

        <Div justify="center" width="100%">
          <CreditForm
            isMobile={isMobile}
            banksOptions={banksOptions}
            creditTypeOptions={creditTypeOptions}
            creditInfo={creditInfo}
            documents={documents}
            handleSelect={handleSelect}
            handleChange={handleChange}
            username={userInfo.name}
            handleBack={handleBack}
            handleFile={handleFile}
            handleDelete={handleDelete}
            handleCreate={handleCreate}
            loading={create.isLoading}
          />
        </Div>
      </WrapperQuote>
    </Container>
  )
}

export default CreditData;