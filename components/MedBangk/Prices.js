import React, { useState } from "react";
import { Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Button } from "../Common/Button";
import { numberFormat } from "@/utilities/helpers";
import Image from "next/image";
import shieldStar from "@/assets/icons/shield-star.svg";
import { CardPlan, Signs, WrapperAmount, WrapperIcon } from "./styles";

export const Prices = ({ isMobile, isTablet }) => {
  const [planAmount, setPlanAmount] = useState(1);
  const [monthlyPrice, setMonthlyPrice] = useState(12500);
  const [semiannualPrice, setSemiannualPrice] = useState(47500);
  const [annualPrice, setAnnualPrice] = useState(85000);
  const [selectedPlan, setSelectedPlan] = useState(1);

  const plansList = [
    { 
      id: 1,
      label: "Mensual",
      description: "La forma más sencilla de acceder a nuestras asistencias: paga tu seguro <span style='font-family: Gilroy Bold'>mes a mes.</span>",
      price: monthlyPrice,
      setPrice: setMonthlyPrice,
    },
    { 
      id: 2,
      label: "Semestral",
      description: "Paga tu seguro cada 6 meses con un <span style='font-family: Gilroy Bold'>descuento que te ayudará a ahorrar y cuidarte.</span>",
      price: semiannualPrice,
      setPrice: setSemiannualPrice,
    },
    { 
      id: 3,
      label: "Anual",
      description: "Paga tu seguro anual y consigue el <span style='font-family: Gilroy Bold'>mejor precio para tus asistencias.</span>",
      price: annualPrice,
      setPrice: setAnnualPrice,
    },
  ];

  return (
    <Div p="0 0 80px 0" direction="column" justify="center" align="center" id="prices">
      <Text
        color={theme.colors.green1000}
        size={theme.fonts.size.lgs}
        font={theme.fonts.family.primaryBold}
      >
        Precios
      </Text>
      <Text color={theme.colors.green1000} size={theme.fonts.size.default2} mb={isMobile ? "20px" : "0"}>
        Conoce nuestros diferentes planes de pago
      </Text>
      {!isMobile && (
        <Div m="50px 0 0 0" direction="column" align="center">
          <Text size={theme.fonts.size.h6} color={theme.colors.gray150}>
            Indica el número de personas para asegurar
          </Text>
          <Div m="10px 0 40px 0" gap="10px">
            <Signs 
              style={{ background: theme.colors.green1000 }} 
              onClick={() => planAmount > 1 && setPlanAmount(planAmount - 1)}
            >
              -
            </Signs>
            <WrapperAmount>
              {planAmount}
            </WrapperAmount>
            <Signs style={{ background: theme.colors.green1000 }} onClick={() => setPlanAmount(planAmount + 1)}>
              +
            </Signs>
          </Div>
        </Div>
      )}
      <Div direction={(isMobile || isTablet) ? "column" : "row"} gap="40px">
        {plansList.map((plan, index) => (
          <CardPlan 
            key={index} 
            backgroundColor={selectedPlan === plan.id ? theme.colors.green1000 : theme.colors.light} 
            onClick={() => setSelectedPlan(plan.id)}
            style={{
              height: selectedPlan === plan.id ? "488px" : "410px"
            }}
          >
            {selectedPlan === plan.id && (
              <WrapperIcon>
                <Image src={shieldStar} alt="shield" />
              </WrapperIcon>
            )}
            <Text  
              color={selectedPlan === plan.id ? theme.colors.white : theme.colors.green1000} 
              size={isTablet ? theme.fonts.size.h4 : theme.fonts.size.h3s}
              font={theme.fonts.family.primaryBold}
              mt={selectedPlan === plan.id ? "10px" : "0"}
              mb="30px"
            >
              {plan.label}
            </Text>
            <Text 
              color={selectedPlan === plan.id ? theme.colors.white : theme.colors.black100} 
              size={theme.fonts.size.h6}
              mb="20px"
              dangerouslySetInnerHTML={{ __html: plan.description }}
            />
            <Text
              size={theme.fonts.size.xls}
              color={selectedPlan === plan.id ? theme.colors.white : theme.colors.black200}
              font={theme.fonts.family.primaryBold}
              mt="40px"
              mb="30px"
            >
              $ {numberFormat(Number(plan.price) * planAmount)}
            </Text>
            <Button
              background={selectedPlan === plan.id ? theme.colors.green1000 : theme.colors.light}
              hover={selectedPlan === plan.id ? theme.colors.green1000 : theme.colors.light}
              borderHover={selectedPlan === plan.id ? theme.colors.white : theme.colors.green1000}
              border={selectedPlan === plan.id ? theme.colors.white : theme.colors.green1000}
              labelColor={selectedPlan === plan.id ? theme.colors.white : theme.colors.green1000}
              width="192px"
              height="40px"
            >
              Adquiérelo ya
            </Button>
          </CardPlan>
        ))}
      </Div>
      {isMobile && (
        <Div m="50px 0 0 0" direction="column" align="center">
          <Text size={theme.fonts.size.h6} color={theme.colors.gray150}>
            Indica el número de mascotas para asegurar
          </Text>
          <Div m="10px 0 40px 0" gap="10px">
            <Signs 
              style={{ background: theme.colors.green1000 }} 
              onClick={() => planAmount > 1 && setPlanAmount(planAmount - 1)}
            >
              -
            </Signs>
            <WrapperAmount>
              {planAmount}
            </WrapperAmount>
            <Signs style={{ background: theme.colors.green1000 }} onClick={() => setPlanAmount(planAmount + 1)}>
              +
            </Signs>
          </Div>
        </Div>
      )}
      <Text 
        size={theme.fonts.size.default2} 
        color={theme.colors.gray150} 
        mt={isMobile ? "20px" : "40px"}
        style={{ alignSelf: isMobile ? "center" : "flex-start", marginLeft: isMobile ? "0" : "100px" }}
      >
        *El valor del seguro se descontará automáticamente de tu método de pago según el plan elegido.
      </Text>
    </Div>
  )
};
