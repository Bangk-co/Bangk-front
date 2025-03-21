import React from "react";
import { useDispatch } from "react-redux";
import { Header } from "@/components/Common/Header";
import { Div, Text } from "@/styles/Common";
import Image from "next/image";
import woman from "@/assets/img/woman-success-policy.svg";
import woman2 from "@/assets/img/woman-accept.svg";
import { theme } from "@/styles/theme";
import { Button } from "@/components/Common/Button";
import { useRouter } from "next/router";
import { ColForm, Container, WrapperPolicy } from "@/styles/Policy";
import { setRequestInfo, setSelectedRequestInformation } from "@/store/requests";
import { initDataLoanInsurancePolicy } from "@/utilities/helpers";

const RequestSuccess = ({ isMobile }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleBangk = () => {
    router.push("/");
    dispatch(setRequestInfo(initDataLoanInsurancePolicy));
    dispatch(setSelectedRequestInformation({}));
  };

  const handleCreate = () => {
    router.push("/establecer-contrasena?source=continue");
  };

  return (
    <Container>
      <Header isMobile={isMobile} />
      <WrapperPolicy>
        <Div justify="center" width="100%">
          <ColForm align="center">
            {isMobile ? (
              <Image
                alt="success-mobile"
                src={woman2}
                width={303}
                height={343.66}
              />
            ) : (
              <Image alt="success" src={woman} width={369.33} height={420} />
            )}
            <Text
              size={isMobile ? theme.fonts.size.h6 : theme.fonts.size.h4s}
              color={theme.colors.white}
              font={theme.fonts.family.primaryBold}
              weight={theme.fonts.weight.bold}
              mt="24px"
            >
              ¡Felicitaciones!
              <br />
              Has completado tu solicitud para la póliza con Bangk
            </Text>
            <Text
              size={isMobile ? theme.fonts.size.sm : theme.fonts.size.default2}
              color={theme.colors.white}
              mt="16px"
              mb="46px"
            >
              Te estaremos contactando para informarte el estado de tu
              solicitud.
            </Text>
            <Div
              gap="10px"
              direction={"column"}
              align={"center"}
              justify={"center"}
            >
              <Button
                font={theme.fonts.family.primaryBold}
                background={theme.colors.yellow500}
                hover={theme.colors.yellow500}
                borderHover={theme.colors.yellow500}
                labelColor={theme.colors.green900}
                size={theme.fonts.size.default2}
                width={"300px"}
                mobileWidth={"100%"}
                height={"40px"}
                radius={"40px"}
                onClick={handleBangk}
              >
                Ver más ofertas Bangk
              </Button>
              {/* MVP commit
               <Link
                color={theme.colors.yellow500}
                onClick={handleCreate}
              >
                Establece una contraseña
              </Link> */}
            </Div>
          </ColForm>
        </Div>
      </WrapperPolicy>
    </Container>
  );
};

export default RequestSuccess;
