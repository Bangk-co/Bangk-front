import React, { useEffect, useState } from "react";
import { Header } from "@/components/Common/Header";
import { Div } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Container, WrapperQuote, WrapperWapp } from "@/styles/Quote";
import Image from "next/image";
import femaleIcon from "@/assets/icons/female.svg";
import maleIcon from "@/assets/icons/male.svg";
import { useDispatch, useSelector } from "react-redux";
import { setInitData } from "@/store/balance";
import { useRouter } from "next/router";
import wappIcon from "@/assets/icons/whatsapp-original.svg";
import { wappLink } from "@/utilities/options";
import { BackButton } from "@/components/Quote/BackButton.js";
import { ImageCol } from "@/components/Quote/ImageCol";
import { InitForm } from "@/components/Quote/InitForm";
import useGetGenders from "@/hooks/QuoteSavings/useGetGenders";
import dayjs from "dayjs";

const Quote = ({ isMobile, isTablet }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const genders = useGetGenders();
  const { data, isSuccess } = genders;
  const { initData } = useSelector((state) => state)?.balance;
  const [genderOptions, setGenderOptions] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [errorDate, setErrorDate] = useState(false);
  const [errorBalance, setErrorBalance] = useState(false);
  const [formInfo, setFormInfo] = useState({
    balance: "",
    birthdate: null,
    gender: "",
  });

  useEffect(() => {
    setFormInfo({ ...initData, birthdate: initData.birthdate === null ? null : dayjs(initData.birthdate) });
  }, [initData]);

  useEffect(() => {
    if (isSuccess && data?.data?.groupSettings.length > 0)
      setGenderOptions(
        data?.data?.groupSettings.map((ele) => ({
          label: ele.name,
          value: ele.id,
          icon: ele.name === "Femenino" ? femaleIcon : maleIcon,
        }))
      );
  }, [data, isSuccess]);

  const handleChange = (event) => {
    const { id, value } = event.target;

    const newValue = value === "" ? "" : value.replace(/\D/g, "");
    setFormInfo((prevFormInfo) => ({
      ...prevFormInfo,
      [id]: newValue,
    }));
    if (
      newValue !== "" &&
      (parseInt(newValue, 10) < 30000000 || parseInt(newValue, 10) > 5000000000)
    ) {
      setErrorBalance(true);
    } else {
      setErrorBalance(false);
    }
  };

  const handleChangeDate = (event) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const birthDate = new Date(event);
    birthDate.setHours(0, 0, 0, 0);
    
    const ageMilliseconds = today - birthDate;
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
    const age = Math.floor(ageMilliseconds / millisecondsPerYear);

    if (age < 18) {
      setErrorDate(true);
    } else {
      setErrorDate(false);
      setFormInfo({ ...formInfo, birthdate: event });
    }
  };

  const handleSelect = (value) => {
    const newInfo = { ...formInfo };
    setFormInfo({ ...newInfo, gender: value });
  };

  const emptyValidation =
    formInfo.balance !== "" &&
    formInfo.birthdate !== null &&
    formInfo.gender !== "" &&
    !errorDate &&
    !errorBalance;

  const handleNext = () => {
    dispatch(setInitData(formInfo));
    router.push("/cotiza-tu-ahorro/oferta");
  };

  const handleWapp = () => {
    const a = document.createElement("a");
    a.href = `${wappLink}`;
    document.body.appendChild(a);
    a.target = "_blank";
    a.click();
  };

  return (
    <Container>
      <Header isMobile={isMobile} />
      <WrapperQuote>
        {!isMobile && (
          <BackButton isHovered={isHovered} setIsHovered={setIsHovered} />
        )}
        <Div gap="127px" justify={isMobile && "center"}>
          {!isMobile && <ImageCol />}

          <InitForm
            isMobile={isMobile}
            formInfo={formInfo}
            handleChange={handleChange}
            handleChangeDate={handleChangeDate}
            handleSelect={handleSelect}
            handleNext={handleNext}
            handleWapp={handleWapp}
            errorDate={errorDate}
            errorBalance={errorBalance}
            genderButtons={genderOptions}
            emptyValidation={emptyValidation}
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

export default Quote;
