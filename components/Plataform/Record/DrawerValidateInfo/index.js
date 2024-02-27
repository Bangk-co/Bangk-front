import { useState } from "react";
import closeIcon from "@/assets/icons/close.svg";
import { Drawer } from "@/components/Common/Drawer";
import Image from "next/image";
import { Div, Text, Row } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { InfoCard } from "./styles";
import arrowDownIcon from "@/assets/icons/arrow-down.svg";
import arrowUpIcon from "@/assets/icons/arrow-up.svg";
import { PersonalData } from "./PersonalData";
import { Button } from "@/components/Common/Button";
import checkIcon from "@/assets/icons/check_circle.svg";
import alertIcon from "@/assets/icons/alert-yellow.svg";

export const DrawerValidateInfo = ({
  showDrawer,
  setShowDrawerValidateInfo,
}) => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);
  const [assessorConcept, setAssessorConcept] = useState("");
  const [assessorComments, setAssessorComments] = useState("");

  const closeDrawer = () => {
    setAssessorConcept("");
    setAssessorComments("");
    setExpandedCardIndex(null);
    setShowDrawerValidateInfo(false);
  };

  const iconCondition = {
    "": null,
    "La información es correcta": (
      <Image alt="check" src={checkIcon} width={32} height={32} />
    ),
    "Presenta novedades": (
      <Image alt="check" src={alertIcon} width={32} height={32} />
    ),
  };

  const descriptionCondition = {
    "": null,
    "La información es correcta": "Esta información ya se encuentra validada",
    "Presenta novedades": "Esta información presenta una novedad",
  };

  const infoCards = [
    {
      icon: iconCondition[assessorConcept],
      title: "Datos personales",
      description:
        descriptionCondition[assessorConcept] !== null
          ? descriptionCondition[assessorConcept]
          : "Verifica que los datos personales sean correctos",
    },
    {
      icon: null,
      title: "Datos financieros",
      description: "Verifica que los datos financieros sean correctos",
    },
    {
      icon: null,
      title: "Datos del inmueble",
      description: "Verifica que los datos del inmueble sean correctos",
    },
    {
      icon: null,
      title: "Datos de salud",
      description: "Verifica que los datos de salud sean correctos",
    },
    {
      icon: null,
      title: "Datos adicionales",
      description: "Verifica que los datos adicionales sean correctos",
    },
  ];

  const handleRadio = (event) => {
    const { value } = event.target;

    setAssessorConcept(value);
  };

  const handleChange = (event) => {
    const { value } = event.target;

    setAssessorComments(value);
  };

  const expandedCardData = [
    <PersonalData
      key="personalData"
      handleRadio={handleRadio}
      assessorConcept={assessorConcept}
      handleChange={handleChange}
      assessorComments={assessorComments}
    />,
  ];

  return (
    <Drawer
      closeIcon={<Image alt="close" src={closeIcon} width={20} height={20} />}
      open={showDrawer}
      onClose={closeDrawer}
      width={"723px"}
    >
      <Div direction="column" justify="space-between" height="100%">
        <Div direction="column">
          <Row width="100%" m="16px 0 24px 0">
            <Text
              font={theme.fonts.family.primaryBold}
              size={theme.fonts.size.ft}
              color={theme.colors.neutralGray800}
            >
              Validar información del solicitante
            </Text>
          </Row>
          <Div direction="column" m="0 0 30px 0" gap="16px" p="0 0 16px 0">
            {infoCards.map((card, indx) => (
              <InfoCard
                key={indx}
                isExpanded={indx === expandedCardIndex}
                onClick={() => {
                  expandedCardIndex === indx
                    ? null
                    : setExpandedCardIndex(
                        indx === expandedCardIndex ? null : indx
                      );
                }}
              >
                <Row justify="space-between">
                  <Row gap="16px" align="center">
                    {card.icon}
                    <Text
                      font={theme.fonts.family.primaryBold}
                      size={theme.fonts.size.ft}
                      color={theme.colors.black}
                    >
                      {card.title}
                    </Text>
                  </Row>
                  <Image
                    alt="arrow"
                    src={
                      expandedCardIndex === indx ? arrowUpIcon : arrowDownIcon
                    }
                    width={32}
                    height={32}
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setExpandedCardIndex(
                        indx === expandedCardIndex ? null : indx
                      )
                    }
                  />
                </Row>
                <Text
                  font={theme.fonts.family.primaryMedium}
                  size={theme.fonts.size.default2}
                  color={theme.colors.black}
                  mt="16px"
                >
                  {card.description}
                </Text>
                {expandedCardIndex === indx && expandedCardData[indx]}
              </InfoCard>
            ))}
          </Div>
        </Div>
        <Row width="100%" justify="right" p="0 0 16px 0">
          <Button
            background={theme.colors.green900}
            hover={theme.colors.green900}
            borderHover={theme.colors.green900}
            border={"transparent"}
            font={theme.fonts.family.primaryBold}
            width={"181px"}
            height={"40px"}
            disabled={true}
          >
            Finalizar validación
          </Button>
        </Row>
      </Div>
    </Drawer>
  );
};
