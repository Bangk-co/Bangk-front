/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Header } from "@/components/Common/Header";
import { Container, Div } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { WrapperQuote } from "@/styles/Quote";
import { BackButton } from "@/components/Quote/BackButton.js";
import { CreditForm } from "@/components/Quote/CreditForm";
import useGetBanks from "@/hooks/Common/useGetBanks";
import useGetCreditType from "@/hooks/Common/useGetCreditType";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import useCreateClient from "@/hooks/QuoteSavings/useCreateUser";

const CreditData = ({ isMobile, isTablet }) => {
  const router = useRouter()
  const create = useCreateClient()
  const { userInfo, initData, termsDate } = useSelector((state) => state)?.balance
  const [isHovered, setIsHovered] = useState(false);
  const banksList = useGetBanks()
  const creditTypeList = useGetCreditType()
  const { data, isSuccess } = banksList
  const { data: dataCT, isSuccess: isSuccessCT} = creditTypeList
  const [banksOptions, setBanksOptions] = useState([])
  const [creditTypeOptions, setCreditTypeOptions] = useState([])
  const [creditInfo, setCreditInfo] = useState({
    bankId: null,
    loanTypeId: null,
    loanNumber: "",
    bankStatementFile: null,
    identificationFile: null
  })

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

  const handleFile = (event, id) => {
    const { files } = event.target
    const newInfo = { ...creditInfo }

    newInfo[id] = files[0]
    setCreditInfo(newInfo)
  }

  const handleDelete = (id) => {
    const newInfo = { ...creditInfo }
    newInfo[id] === null
    setCreditInfo(newInfo)
  }

  const handleBack = () => {
    router.push("/cotiza-tu-ahorro/diligencia-tus-datos")
  }

  const handleCreate = () => {
    create.reset();
    create.mutate(
      { ...userInfo, ...creditInfo, ...initData, termsDate: termsDate },
      {
        onSuccess: (res) => {
          console.log("Todu bem")
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
    <Container style={{ background: isMobile && theme.colors.green }}>
      <Header isMobile={isMobile} />
      <WrapperQuote style={{ height: "100vh" }}>
        {!isMobile &&
          <BackButton isHovered={isHovered} setIsHovered={setIsHovered} />
        }

        <Div justify="center" width="100%">
          <CreditForm
            isMobile={isMobile}
            banksOptions={banksOptions}
            creditTypeOptions={creditTypeOptions}
            creditInfo={creditInfo}
            handleSelect={handleSelect}
            handleChange={handleChange}
            username={userInfo.name}
            handleBack={handleBack}
            handleFile={handleFile}
            handleDelete={handleDelete}
            handleCreate={handleCreate}
          />
        </Div>
      </WrapperQuote>
    </Container>
  )
}

export default CreditData;