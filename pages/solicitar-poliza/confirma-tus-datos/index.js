import React, { useEffect, useState } from "react";
import { Container, WrapperPolicy } from "@/styles/Policy";
import { Header } from "@/components/Common/Header";
import { Div } from "@/styles/Common";
import useGetDocumentType from "@/hooks/Common/useGetDocumentType";
import useGetCountries from "@/hooks/Common/useGetIndicatives";
import { BackButton } from "@/components/Quote/BackButton.js";
import { UserForm } from "@/components/Policy/UserForm";

const UserInfoConfirmation = ({ isMobile }) => {
  const documentType = useGetDocumentType()
  const indicatives = useGetCountries()
  const { data, isSuccess } = documentType
  const { data: dataIndicatives, isSuccess: isSuccessIndicatives } = indicatives
  const [documentTypeOptions, setDocumentTypeOptions] = useState([])
  const [indicativesOptions, setIndicativesOptions] = useState([])
  const [isHovered, setIsHovered] = useState(false);
  const [formInfo, setFormInfo] = useState({
    documentTypeId: null,
    identificationNumber: "",
    name: "",
    lastName: "",
    countryCode: null,
    phoneNumber: "",
    email: "",
    documentIssueDate: "",
  })

  useEffect(() => {
    if (isSuccess && data?.data?.groupSettings.length > 0)
      setDocumentTypeOptions(data?.data?.groupSettings.map((ele) => ({
        label: ele.name,
        value: ele.id
      })))
  }, [data, isSuccess])

  useEffect(() => {
    if (isSuccessIndicatives && dataIndicatives?.data?.groupSettings.length > 0)
      setIndicativesOptions(dataIndicatives?.data?.groupSettings.map((ele) => ({
        label: `(${ele.code})`,
        value: ele.id
      })))
  }, [dataIndicatives, isSuccessIndicatives])

  return (
    <Container>
      <Header isMobile={isMobile} />
      <WrapperPolicy>
        {!isMobile &&
          <BackButton isHovered={isHovered} setIsHovered={setIsHovered} />
        }
        <Div justify="center" width="100%">
          <UserForm
            isMobile={isMobile}
            documentTypeOptions={documentTypeOptions}
            indicativesOptions={indicativesOptions}
            formInfo={formInfo}
          />
        </Div>
      </WrapperPolicy>
    </Container>
  )
}

export default UserInfoConfirmation