import Breadcrumbs from "@/components/Common/Breadcrumbs";
import React, { useState } from "react";
import { Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Tabs } from "@/components/Common/Tabs";
import { Tab } from "@/components/Common/Tabs/Tab";
import { useRouter } from "next/router";
import footprint from "@/assets/img/footprintOrange2.png";
import Image from "next/image";
import { Step1 } from "@/components/SecureItNow/Step1";
import { Step2 } from "@/components/SecureItNow/Step2";
import { Step3 } from "@/components/SecureItNow/Step3";
import { Wrapper } from "@/components/SecureItNow/styles";

const SecureItNow = ({ isMobile }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const router = useRouter();
  const { petsAmount, selectedPlan } = router.query;
  const [petsForm, setPetsForm] = useState({
    methodOfPayment: selectedPlan || "", 
    petsAmount: petsAmount || 1,
    documentType: "",
    documentNumber: "",
    email: "",
    name: "",
    lastName: "",
    countryCode: "",
    phoneNumber: "",
    authorization: false,
    petsInfo: [
      {
        id: 0,
        petType: "",
        petName: "",
        petBreed: "",
        petAge: "",
        petColor: "",
      }
    ],
  });

  const labelsProps = {
    labelColor: theme.colors.gray1000,
    labelSize: theme.fonts.size.default2,
    labelFont: theme.fonts.family.primary,
    border: theme.colors.gray1100
  };

  const buttonProps = {
    background: theme.colors.orange1000,
    labelColor: theme.colors.white,
    font: theme.fonts.family.primary,
    size: theme.fonts.size.h6,
    border: theme.colors.orange1000,
    hover: theme.colors.orange1000,
    borderHover: theme.colors.orange1000,
    height: "40px",
    borderRadius: "50px"
  };

  const breadcrumbs = [
    {
      label: "Bangk",
      href: "/",
      type: "link"
    },
    {
      label: "PetBangk",
      href: "/pet-bangk",
      type: "link"
    },
    {
      label: "Info PetBangk",
      href: "/pet-bangk/info-petbangk",
      type: "link",
    },
    {
      label: "Adquiere asistencia",
      type: "text"
    }
  ];

  const tabs = [
    { label: "Información general" },
    { label: "Datos de tu mascota" },
    { label: "Resumen de tu seguro"}
  ];

  const handleContinue = () => {
    if (selectedTab === 2) {
      return;
    } 
    setSelectedTab(selectedTab + 1);
  };

  return (
    <>
      <Breadcrumbs items={breadcrumbs} isMobile={isMobile} />
      <Wrapper>
        <Image 
          src={footprint} 
          alt="footprint" 
          style={{
            position: "absolute",
            top: "200px",
            right: "50px"
          }}
        />
        <Text
          font={theme.fonts.family.primaryBold}
          color={theme.colors.orange500}
          size={isMobile ? theme.fonts.size.h1 : theme.fonts.size.lgs}
        >
          Configura <span style={{ fontFamily: theme.fonts.family.primaryBold, color: theme.colors.blue200 }}>tu seguro</span>
        </Text>
        <Text color={theme.colors.blue200} mb="40px">
          Contrata tu seguro en menos de 2 minutos
        </Text>
        <Tabs
          value={selectedTab}
          background={theme.colors.orange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((tab, idx) => (
            <Tab
              key={idx}
              label={tab.label}
              color={theme.colors.gray1200}
              size={theme.fonts.size.default2}
              source="pet"
            />
          ))}
        </Tabs>
        {selectedTab === 0 && (
          <Step1 
            isMobile={isMobile}
            buttonProps={buttonProps}
            labelsProps={labelsProps} 
            handleContinue={handleContinue}
            petsForm={petsForm}
            setPetsForm={setPetsForm}
          />
        )}
        {selectedTab === 1 && (
          <Step2 
            isMobile={isMobile}
            buttonProps={buttonProps}
            labelsProps={labelsProps}
            handleContinue={handleContinue}
            petsForm={petsForm}
            setPetsForm={setPetsForm}
          />
        )}
        {selectedTab === 2 && (
          <Step3 
            isMobile={isMobile}
            buttonProps={buttonProps}
            handleContinue={handleContinue}
            petsForm={petsForm}
            setPetsForm={setPetsForm}
            setSelectedTab={setSelectedTab}
          />
        )}
      </Wrapper>
    </>
  );
};

export default SecureItNow;