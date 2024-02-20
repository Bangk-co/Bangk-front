import { useState } from "react";
import { WrapperModal } from "./styles";
import { Div, Text, Col } from "@/styles/Common";
import close from "@/assets/icons/close.svg";
import alert from "@/assets/icons/alert.svg";
import Image from "next/image";
import { theme } from "@/styles/theme";
import { Button } from "@/components/Common/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { Radio } from "@/components/Common/Radio";
import { RadioGroup } from "@/components/Common/Radio/Group";
import { Link } from "@/components/Common/Link";

export const ModalDecline = ({
  isMobile,
  handleClose,
  handleReject,
  isLoading,
  isRejecting,
  setisRejecting,
  handleRadio,
  reasonToReject,
}) => {
  return (
    <WrapperModal isMobile={isMobile}>
      <Div justify="flex-end">
        <Image
          alt="close"
          src={close}
          style={{ cursor: "pointer" }}
          onClick={handleClose}
        />
      </Div>
      <Col gap="16px">
        {!isRejecting && (
          <Div width="100%" justify="center">
            <Image
              alt="alert"
              src={alert}
              height={isMobile ? 48 : 64}
              width={isMobile ? 48 : 64}
            />
          </Div>
        )}
        <Text
          size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.ft}
          color={theme.colors.green900}
          font={theme.fonts.family.primaryBold}
          weight={theme.fonts.weight.bold}
          align="center"
          style={{ width: "100%" }}
        >
          {!isRejecting
            ? "¿Desea rechazar la cotización?"
            : "¿Por qué no deseas continuar con la cotización?"}
        </Text>
        {!isRejecting ? (
          <Div>
            <Text
              color={theme.colors.neutralGray900}
              size={theme.fonts.size.default2}
              align="center"
            >
              Ten en cuenta que una vez rechaces la oferta, deberás volver a
              solicitar la cotización desde cero.
            </Text>
          </Div>
        ) : (
          <RadioGroup
            gap="5px"
            name="reasonToDecline"
            direction="column"
            label=""
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            value={reasonToReject}
            onChange={handleRadio}
          >
            <Radio
              label="En este momento no deseo ahorrar"
              value={"En este momento no deseo ahorrar"}
              checked={reasonToReject === "En este momento no deseo ahorrar"}
            />
            <Radio
              label="No estoy interesado/a"
              value={"No estoy interesado/a"}
              checked={reasonToReject === "No estoy interesado/a"}
            />
            <Radio
              label="No entendí la cotización"
              value={"No entendí la cotización"}
              checked={reasonToReject === "No entendí la cotización"}
            />
          </RadioGroup>
        )}
      </Col>
      <Div
        gap={isMobile ? "16px" : isRejecting ? "16px" : "32px"}
        direction={isMobile ? "column" : isRejecting ? "column" : "row"}
        align="center"
      >
        <Button
          background={theme.colors.yellow500}
          border={isRejecting ? "transparent" : theme.colors.yellow500}
          hover={theme.colors.yellow500}
          borderHover={theme.colors.yellow500}
          labelColor={theme.colors.green900}
          size={theme.fonts.size.default2}
          font={theme.fonts.family.primaryBold}
          width={isRejecting ? "100%" : "241px"}
          mobileWidth={"100%"}
          height={"40px"}
          radius={"40px"}
          onClick={!isRejecting ? handleClose : handleReject}
          style={{ order: isMobile ? -1 : 1 }}
          disabled={(isRejecting && reasonToReject === "") || isLoading}
          startIcon={
            isLoading ? (
              <CircularProgress
                size={20}
                style={{ color: theme.colors.white }}
              />
            ) : null
          }
        >
          {!isRejecting ? "Volver a la cotizacion" : "Enviar respuesta"}
        </Button>
        {!isRejecting ? (
          <Button
            background={theme.colors.white}
            border={theme.colors.green900}
            hover={theme.colors.white}
            borderHover={theme.colors.green900}
            borderHeight={"3px solid"}
            labelColor={theme.colors.green900}
            size={theme.fonts.size.default2}
            font={theme.fonts.family.primaryBold}
            width={"241px"}
            mobileWidth={"100%"}
            height={"40px"}
            radius={"40px"}
            style={{ order: isMobile ? 1 : -1 }}
            onClick={() => setisRejecting(true)}
          >
            Si, rechazar
          </Button>
        ) : (
          <Link
            onClick={handleReject}
            hover={theme.colors.gray100}
            color={theme.colors.green900}
            font={theme.fonts.family.primaryBold}
            weight={theme.fonts.weight.semibold}
            size={theme.fonts.size.default2}
            width={"100%"}
            height={"40px"}
            radius="40px"
            startIcon={
              isLoading ? (
                <CircularProgress
                  size={20}
                  style={{ color: theme.colors.white }}
                />
              ) : null
            }
            style={{
              order: isMobile ? 1 : isRejecting ? 1 : -1,
            }}
          >
            <Div
              gap="8px"
              align="center"
              m="8px 0"
              style={{
                borderBottom: `2px solid ${theme.colors.green900}`,
              }}
            >
              <Text
                color={theme.colors.green900}
                size={theme.fonts.size.default2}
                font={theme.fonts.family.primaryBold}
              >
                Omitir
              </Text>
            </Div>
          </Link>
        )}
      </Div>
    </WrapperModal>
  );
};
