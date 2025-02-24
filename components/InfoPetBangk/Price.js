import React, { useState } from "react";
import { Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { CardPlan, WrapperAmount, Signs, WrapperIcon } from "./style";
import { Button } from "../Common/Button";
import { numberFormat } from "@/utilities/helpers";
import Image from "next/image";
import shieldStar from "@/assets/icons/shield-star.svg";
import { useRouter } from "next/router";
export const Price = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const [petsAmount, setPetsAmount] = useState(1);
  const [monthlyPrice, setMonthlyPrice] = useState(15000);
  const [semiannualPrice, setSemiannualPrice] = useState(85000);
  const [annualPrice, setAnnualPrice] = useState(150000);
  const [selectedPlan, setSelectedPlan] = useState(2);

  const plansList = [
    { 
      id: 1,
      label: "Mensual",
      description: "La forma más sencilla de acceder a nuestras asistencias: paga tu asistencia <span style='font-family: Gilroy Bold'>mes a mes.</span>",
      price: monthlyPrice,
      setPrice: setMonthlyPrice,
    },
    { 
      id: 2,
      label: "Semestral",
      description: "Paga tu asistencia cada 6 meses con un <span style='font-family: Gilroy Bold'>descuento que te ayudará a ahorrar y cuidarte.</span>",
      price: semiannualPrice,
      setPrice: setSemiannualPrice,
    },
    { 
      id: 3,
      label: "Anual",
      description: "Paga tu asistencia anual y consigue el <span style='font-family: Gilroy Bold'>mejor precio para tus asistencias.</span>",
      price: annualPrice,
      setPrice: setAnnualPrice,
    },
  ];

  return (
    <Div p="100px 0" direction="column" justify="center" align="center">
      <Text
        color={theme.colors.orange500}
        size={theme.fonts.size.lgs}
        font={theme.fonts.family.primaryBold}
      >
        Nuestros <span style={{color: theme.colors.blue200, fontFamily: theme.fonts.family.primaryBold}}>Planes</span>
      </Text>
      <Text color={theme.colors.blue200} size={theme.fonts.size.default2}>
        Conoce nuestros diferentes planes de pago
      </Text>

      <Div m="50px 0 0 0" direction="column" align="center">
        <Text size={theme.fonts.size.h6} color={theme.colors.gray150}>
          Indica el número de mascotas 
        </Text>
        <Div m="10px 0 40px 0" gap="10px">
          <Signs 
            style={{ background: theme.colors.orange500 }} 
            onClick={() => petsAmount > 1 && setPetsAmount(petsAmount - 1)}
          >
            -
          </Signs>
          <WrapperAmount>
            {petsAmount}
          </WrapperAmount>
          <Signs style={{ background: theme.colors.orange500 }} onClick={() => setPetsAmount(petsAmount + 1)}>
            +
          </Signs>
        </Div>
      </Div>

      <Div direction={isMobile ? "column" : "row"} gap="40px">
        {plansList.map((plan, index) => (
          <CardPlan 
            key={index} 
            backgroundColor={selectedPlan === plan.id ? theme.colors.purple : theme.colors.light} 
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
              color={selectedPlan === plan.id ? theme.colors.white : theme.colors.orange500} 
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
              $ {numberFormat(Number(plan.price) * petsAmount)}
            </Text>
            <Button
              background={selectedPlan === plan.id ? theme.colors.orange500 : theme.colors.light}
              hover={selectedPlan === plan.id ? theme.colors.orange500 : theme.colors.light}
              borderHover={selectedPlan === plan.id ? theme.colors.orange500 : theme.colors.orange500}
              border={selectedPlan === plan.id ? theme.colors.orange500 : theme.colors.orange500}
              labelColor={selectedPlan === plan.id ? theme.colors.white : theme.colors.orange500}
              width="192px"
              height="40px"
              onClick={() => router.push(`/pet-bangk/asegura-ya?selectedPlan=${selectedPlan}&&petsAmount=${petsAmount}`)}
            >
              Protege tu mascota
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
              style={{ background: theme.colors.orange500 }} 
              onClick={() => petsAmount > 1 && setPetsAmount(petsAmount - 1)}
            >
              -
            </Signs>
            <WrapperAmount>
              {petsAmount}
            </WrapperAmount>
            <Signs style={{ background: theme.colors.orange500 }} onClick={() => setPetsAmount(petsAmount + 1)}>
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
        *El valor de la asistencia se descontará automáticamente de tu método de pago según el plan elegido.
      </Text>
    </Div>
  )
};
