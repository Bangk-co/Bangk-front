import React, { useEffect, useState } from "react";
import { Header } from "@/components/Common/Header";
import { Div } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Container, WrapperQuote, WrapperWapp } from "@/styles/Quote";
import Image from "next/image";
import wappIcon from "@/assets/icons/whatsapp-original.svg";
import { wappLink } from "@/utilities/options";
import { BackButton } from "@/components/Quote/BackButton.js";
import { UserForm } from "@/components/Quote/UserForm";
import useGetDocumentType from "@/hooks/Common/useGetDocumentType";
import useGetIndicatives from "@/hooks/Common/useGetIndicatives";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setTermsDate, setUserInfo, setValidCode } from "@/store/balance";
import useSendCode from "@/hooks/QuoteSavings/useSendCode";
import toast from "react-hot-toast";
import { ToastErrorClient } from "@/components/Common/ToastErrorClients";

const UserData = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state)?.balance;
  const sendCode = useSendCode();
  const documentType = useGetDocumentType();
  const indicatives = useGetIndicatives();
  const { data, isSuccess } = documentType;
  const { data: dataIndicatives, isSuccess: isSuccessIndicatives } =
    indicatives;
  const [documentTypeOptions, setDocumentTypeOptions] = useState([]);
  const [indicativesOptions, setIndicativesOptions] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [formInfo, setFormInfo] = useState({
    documentType: 76,
    identificationNumber: "",
    name: "",
    lastname: "",
    countryCode: 6,
    phone: "",
    email: "",
  });
  const [terms, setTerms] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(false);

  useEffect(() => {
    setFormInfo(userInfo);
  }, [userInfo]);

  useEffect(() => {
    if (isSuccess && data?.data?.groupSettings.length > 0)
      setDocumentTypeOptions(
        data?.data?.groupSettings.map((ele) => ({
          label: ele.name,
          value: ele.id,
        }))
      );
  }, [data, isSuccess]);

  useEffect(() => {
    if (isSuccessIndicatives && dataIndicatives?.data?.groupSettings.length > 0)
      setIndicativesOptions(
        dataIndicatives?.data?.groupSettings.map((ele) => ({
          label: `(${ele.code})`,
          value: ele.id,
        }))
      );
  }, [dataIndicatives, isSuccessIndicatives]);

  const handleSelect = (event) => {
    const { name, value } = event.target;
    const newInfo = { ...formInfo };

    newInfo[name] = value;
    setFormInfo(newInfo);
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    const newInfo = { ...formInfo };

    if (id === "identificationNumber") {
      if (formInfo.documentType !== 78) {
        newInfo[id] = value.replace(/\D/g, "");
      } else {
        newInfo[id] = value;
      }
    } else if (id === "phone") {
      newInfo[id] = value.replace(/\D/g, "");
    } else {
      newInfo[id] = value;
    }

    setFormInfo(newInfo);
  };

  const handleTerms = (event) => {
    const { checked } = event.target;
    const currentDate = new Date();

    setTerms(checked);
    dispatch(setTermsDate(currentDate));
  };

  const handleWapp = () => {
    const a = document.createElement("a");
    a.href = `${wappLink}`;
    document.body.appendChild(a);
    a.target = "_blank";
    a.click();
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleAccept = () => {
    setOpenModal(false);
    setTerms(true);
    setForceUpdate(!forceUpdate);
  };

  const handleBack = () => {
    router.push("/cotiza-tu-ahorro/oferta");
  };

  const handleContinue = () => {
    dispatch(setUserInfo(formInfo));
    sendCode.reset();
    sendCode.mutate(
      {
        email: formInfo.email,
        identificationNumber: formInfo.identificationNumber,
      },
      {
        onSuccess: (res) => {
          dispatch(setValidCode(res.data.code));
          router.push(`/validacion-identidad`);
        },
        onError: (err) => {
          err.response.data.map((error) => {
            toast.custom(<ToastErrorClient message={`${error}`} />, {
              duration: 1000,
            });
          });
        },
      }
    );
  };

  return (
    <Container>
      <Header isMobile={isMobile} />
      <WrapperQuote>
        {!isMobile && (
          <BackButton isHovered={isHovered} setIsHovered={setIsHovered} />
        )}
        <Div justify="center" width="100%">
          <UserForm
            isMobile={isMobile}
            documentTypeOptions={documentTypeOptions}
            indicativesOptions={indicativesOptions}
            formInfo={formInfo}
            openModal={openModal}
            setOpenModal={setOpenModal}
            handleClose={handleClose}
            handleAccept={handleAccept}
            handleSelect={handleSelect}
            handleChange={handleChange}
            terms={terms}
            handleTerms={handleTerms}
            handleBack={handleBack}
            handleContinue={handleContinue}
            handleWapp={handleWapp}
          />
        </Div>
        {!isMobile && (
          <WrapperWapp>
            <Image
              alt="wapp-icon"
              src={wappIcon}
              onClick={handleWapp}
              style={{ cursor: "pointer" }}
            />
          </WrapperWapp>
        )}
      </WrapperQuote>
    </Container>
  );
};

export default UserData;
