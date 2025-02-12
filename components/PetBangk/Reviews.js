import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Col7,
  Col8,
  CommentText,
  Line,
  NameText,
  NameText2,
  OrangeCard,
  RowReviews,
  SubTitleReviews,
  TitleReviews,
  WrapperAvatar,
  WrapperComment,
  WrapperNameText,
  WrapperPerson,
  WrapperReviews,
  WrapperTitleReviews,
} from "./styles";
import message from "../../assets/img/message.png";
import ReviewsMobile from "./ReviewsMobile";
import ReactPlayer from "react-player/lazy";
import { Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Link } from "../Common/Link";
import marcela from "../../assets/img/marcela.jpg";
import { useRouter } from "next/router";

const Reviews = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    setShowPlayer(true);
  }, []);

  const navigateToConditions = () => {
    router.push("/pet-bangk/condiciones");
  };

  return (
    <WrapperReviews>
      {isMobile ? (
        <ReviewsMobile />
      ) : (
        <>
          <WrapperTitleReviews>
            <TitleReviews>Reseñas:</TitleReviews>
            <SubTitleReviews>Comentarios sobre PetBangk</SubTitleReviews>
          </WrapperTitleReviews>
          <RowReviews>
            <Col7>
              <WrapperComment>
                <Image alt="message" src={message} width={49} />
              </WrapperComment>
              <CommentText>
                &quot;Toby ha tenido problemas de salud desde tiempo atrás,
                gracias a Petbangk he podido prevenir y cuidarlo de la mejor
                manera.&quot;
              </CommentText>
              <Line />
              <WrapperPerson>
                <WrapperAvatar>
                  <Image
                    alt="marcela"
                    src={marcela}
                    style={{ borderRadius: "100%" }}
                    width={69}
                    height={69}
                  />
                </WrapperAvatar>
                <WrapperNameText>
                  <NameText>Samuel Valencia</NameText>
                  <NameText2>Maestro y padre de dos perritos.</NameText2>
                </WrapperNameText>
              </WrapperPerson>
            </Col7>
            <Col8>
              <div
                id="review-video"
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  marginLeft: isTablet ? "50px" : "0px",
                  height: isTablet ? "199px" : "422px",
                }}
              >
                {showPlayer ? (
                  <ReactPlayer
                    url={
                      "https://www.youtube.com/watch?v=ay7WaSaPp0k&ab_channel=Bangk"
                    }
                    width={isTablet ? 309 : 656}
                    height={isTablet ? 199 : 422}
                    controls
                    suppressHydrationWarning={true}
                  />
                ) : null}
              </div>
            </Col8>
          </RowReviews>
        </>
      )}
      <Div
        m={isMobile || isTablet ? "50px" : "150px"}
        justify="center"
        direction="column"
        align="center"
      >
        <Text
          color={theme.colors.blue200}
          style={{
            width: isMobile || isTablet ? "100%" : "950px",
            textAlign: "center",
          }}
        >
          Los servicios del plan de asistencias de MedBangk/PetBangk son
          prestados por{" "}
          <span style={{ fontFamily: theme.fonts.family.primaryBold }}>
            GEA, “Grupo Especializado de Asistencias Colombia S.A.S.”
          </span>
        </Text>
        <Text color={theme.colors.blue200} mt="18px">
          Consulta
          <Link
            color={theme.colors.blue200}
            size={theme.fonts.size.default}
            style={{ textDecoration: "underline" }}
            onClick={navigateToConditions}
          >
            aquí
          </Link>
          las Condiciones Generales del plan de asistencia
        </Text>
        <OrangeCard onClick={navigateToConditions}>
          Condiciones
          <br />
          Generales
        </OrangeCard>
      </Div>
    </WrapperReviews>
  );
};

export default Reviews;
