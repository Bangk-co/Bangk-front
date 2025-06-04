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
import reviewPhoto from "../../assets/img/reviewPhoto.png";
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
                &quot;Ellos me ayudaron a resolver un problema que tenia Toby sin tener que transportarme y sin tener que gastar altas cantidades de dinero, con Bangk la solución para tu mascota está aquí.&quot;
              </CommentText>
              <Line />
              <WrapperPerson>
                <WrapperAvatar>
                  <Image
                    alt="reviewPhoto"
                    src={reviewPhoto}
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
                  height: isTablet ? "199px" : "372px",
                }}
              >
                {showPlayer ? (
                  <ReactPlayer
                    url="/video/petBangkReview.mp4"
                    width={isTablet ? 309 : 656}
                    height={isTablet ? 199 : 372}
                    controls
                    suppressHydrationWarning={true}
                    style={{ borderRadius: "24px" }}
                    wrapperStyle={{ borderRadius: "24px" }}
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
            GEA, &quot;Grupo Especializado de Asistencias Colombia S.A.S.&quot;
          </span>
        </Text>
        <Text color={theme.colors.blue200} mt="18px">
          Consulta
          <Link
            color={theme.colors.blue200}
            size={theme.fonts.size.default}
            font={theme.fonts.family.primary}
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
