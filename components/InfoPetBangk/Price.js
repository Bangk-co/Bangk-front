import { Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import React, { useState } from "react";
import { CardPlan, WrapperAmount } from "./style";
import { Button } from "../Common/Button";

export const Price = ({ isMobile, isTablet }) => {
  const [monthlyAmount, setMonthlyAmount] = useState(1);
  const [semiannualAmount, setSemiannualAmount] = useState(1);
  const [annualAmount, setAnnualAmount] = useState(1);

  const plansList = [
    { 
      label: "MENSUAL",
      price: "$ 000.000", 
      description: "La manera más sencilla de tener nuestras asistencias, <span style='font-family: Gilroy Bold'>mes a mes</span> tu suscripción",
      colorCard: theme.colors.blue200,
      colorTitle: theme.colors.yellow,
      colorButton: theme.colors.orange500,
      colorText: theme.colors.white,
      colorTextButton: theme.colors.green,
      amount: monthlyAmount,
      setAmount: setMonthlyAmount,
    },
    { 
      label: "SEMESTRAL",
      price: "$ 000.000", 
      description: "Paga tu plan cada 6 meses con un descuento que te <span style='font-family: Gilroy Bold'>ayudará a ahorrar y cuidarte.</span>",
      colorCard: theme.colors.orange500,
      colorTitle: theme.colors.white,
      colorButton: theme.colors.yellow,
      colorText: theme.colors.white, 
      colorTextButton: theme.colors.green,
      amount: semiannualAmount,
      setAmount: setSemiannualAmount,
    },
    { 
      label: "ANUAL" ,
      price: "$ 000.000", 
      description: "Cancela tu plan Anualmente consiguiendo <span style='font-family: Gilroy Bold'>el mejor precio para tus asistencias.</span>",
      colorCard: theme.colors.yellow,
      colorTitle: theme.colors.purple,
      colorButton: theme.colors.blue200,
      colorText: theme.colors.black, 
      colorTextButton: theme.colors.white, 
      amount: annualAmount,
      setAmount: setAnnualAmount,
    },
  ];



  return (
    <Div p="100px 0" direction="column" justify="center" align="center">
      <Text color={theme.colors.blue200} size={theme.fonts.size.default}>
        Conoce nuestros diferentes planes de pago
      </Text>
      <Text 
        color={theme.colors.blue200} 
        size={isTablet ? theme.fonts.size.lg : theme.fonts.size.xl}
        font={theme.fonts.family.primaryBold}  
        mb="40px"
      >
        Precios
      </Text>
      <Div direction={isMobile ? "column" : "row"} gap="40px">
        {plansList.map((plan, index) => (
          <CardPlan key={index} backgroundColor={plan.colorCard}>
            <Text  
              color={plan.colorTitle} 
              size={isTablet ? theme.fonts.size.h4 : theme.fonts.size.h3}
              font={theme.fonts.family.primaryBold}
              mb="30px"
            >
              {plan.label}
            </Text>
            <Text 
              color={plan.colorText} 
              size={theme.fonts.size.default2}
              mb="20px"
              style={{ width: "212px", height: "80px" }}
              dangerouslySetInnerHTML={{ __html: plan.description }}
            />
            <Div align="center" justify="center" gap="20px" m="0 0 10px 0">
              <Text size={theme.fonts.size.h1} color={theme.colors.green} style={{cursor: "pointer"}} onClick={() => plan.amount > 1 && plan.setAmount(plan.amount - 1)}>-</Text>
              <WrapperAmount>{plan.amount}</WrapperAmount>
              <Text size={theme.fonts.size.h1} color={theme.colors.green} style={{cursor: "pointer"}} onClick={() => plan.setAmount(plan.amount + 1)}>+</Text>
            </Div>
            <Button
              background={plan.colorButton}
              hover={plan.colorButton}
              borderHover={plan.colorButton}
              colorHover={plan.colorTextButton}
              border={plan.colorButton}
              labelColor={plan.colorTextButton}
              size={theme.fonts.size.h6}
              height="45px"
            >
              {plan.price}
            </Button>
          </CardPlan>
        ))}
      </Div>
    </Div>
  )
};
