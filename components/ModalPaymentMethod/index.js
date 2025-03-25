import React, { useState } from "react";
import { theme } from "@/styles/theme";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Col, Div, Row, Text } from "@/styles/Common";
import { CircularProgress, Modal } from "@mui/material";
import { WrapperModal } from "./styles";
import useGenerateTknTrxBancolombia from "@/hooks/WompiPayment/useGenerateTknTrxBancolombia";
import { Button } from "../Common/Button";
import close from "@/assets/icons/close.svg";
import { Radio } from "../Common/Radio";
import bancolombia from "@/assets/img/bancolombia.svg";
import useCreateInsurance from "@/hooks/Med/useCreateInsurance";
import { setMedFormInfo } from "@/store/med";
import toast from "react-hot-toast";
import { ToastErrorClient } from "../Common/ToastErrorClients";

const ModalPaymentMethod = ({
  showModal,
  handleCloseModal,
  isMobile,
  handleCardPayment,
}) => {
  const router = useRouter();
  const createInsurance = useCreateInsurance();
  const dispatch = useDispatch();
  const { medForm } = useSelector((state) => state.med);

  const getBancolombiaToken = useGenerateTknTrxBancolombia();
  const [paymentMethod, setPaymentMethod] = useState(null);

  const buttonProps = {
    background: theme.colors.orange1000,
    labelColor: theme.colors.white,
    font: theme.fonts.family.primary,
    size: theme.fonts.size.h6,
    border: theme.colors.orange1000,
    hover: theme.colors.orange1000,
    borderHover: theme.colors.orange1000,
    height: "40px",
    borderRadius: "50px",
  };

  const handlePayBancolombia = () => {
    createInsurance.reset();
    createInsurance.mutate(medForm, {
      onSuccess: (resInsurance) => {
        getBancolombiaToken.reset();
        getBancolombiaToken.mutate(
          {},
          {
            onSuccess: (resToken) => {
              dispatch(
                setMedFormInfo({
                  ...medForm,
                  bancolombiaToken: resToken?.data?.result?.data?.id,
                  applicationId: resInsurance?.data?.medEnsuranceApplicationId,
                })
              );
              handleCloseModal();
              window.location.href =
                resToken?.data?.result?.data?.authorization_Url;
            },
            onError: (error) => {
              console.log("errorbancolombia", error);
            },
          }
        );
      },
      onError: (err) => {
        console.log("errorinsurance", err);
        isMobile
          ? toast.custom(
              <ToastErrorClient
                message={"No fue posible crear el seguro"}
                color={theme.colors.white}
                background={theme.colors.primary300}
              />,
              { duration: 1000 }
            )
          : toast.error("No fue posible crear el seguro");
      },
    });
  };

  const methodOfPaymentOptions = [
    {
      label: <Image alt="bancolombia" src={bancolombia} />,
      value: "bancolombia",
    },
    {
      label: (
        <Text
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          color={theme.colors.gray1000}
          style={{ marginLeft: "8px" }}
        >
          Tarjeta
        </Text>
      ),
      value: "card",
    },
  ];

  return (
    <Modal open={showModal}>
      <WrapperModal>
        <Div justify="flex-end">
          <Image
            alt="close"
            src={close}
            style={{ cursor: "pointer" }}
            onClick={handleCloseModal}
          />
        </Div>
        <Col gap="8px" height="100%">
          <Text
            size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
            color={theme.colors.gray150}
            font={theme.fonts.family.primaryMedium}
            mb="20px"
          >
            Selecciona tu método de pago:
          </Text>
          {methodOfPaymentOptions.map((option, idx) => (
            <Div
              key={idx}
              background={theme.colors.light}
              height={"81px"}
              radius={"16px"}
              width="100%"
              p="16px"
              m="8px 0"
              align="center"
              style={{
                border: `1px solid ${theme.colors.gray1300}`,
                cursor: "pointer",
              }}
              onClick={() => setPaymentMethod(option.value)}
            >
              <Radio
                key={idx}
                label={option.label}
                labelColor={theme.colors.gray1000}
                radioColor={theme.colors.gray1000}
                checked={paymentMethod === option.value}
              />
            </Div>
          ))}
        </Col>
        <Div direction={isMobile ? "column" : "row"} gap="20px">
          <Button
            background={theme.colors.white}
            labelColor={theme.colors.orange1000}
            font={theme.fonts.family.primary}
            size={theme.fonts.size.h6}
            border={theme.colors.orange1000}
            hover={theme.colors.white}
            borderHover={theme.colors.orange1000}
            height="40px"
            borderRadius="50px"
            width={isMobile ? "100%" : "124px"}
            labelWeight={theme.fonts.weight.regular}
            onClick={handleCloseModal}
          >
            Cancelar
          </Button>
          <Button
            {...buttonProps}
            width={isMobile ? "100%" : "200px"}
            labelWeight={theme.fonts.weight.regular}
            onClick={
              paymentMethod === "bancolombia"
                ? handlePayBancolombia
                : handleCardPayment
            }
            startIcon={
              createInsurance.isLoading || getBancolombiaToken.isLoading ? (
                <CircularProgress
                  size={20}
                  style={{ color: theme.colors.white }}
                />
              ) : null
            }
          >
            Pagar ahora
          </Button>
        </Div>
      </WrapperModal>
    </Modal>
  );
};

export default ModalPaymentMethod;
