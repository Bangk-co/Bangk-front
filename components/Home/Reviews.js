import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Col7,
  Col8,
  CommentText,
  Line,
  NameText,
  NameText2,
  RowReviews,
  SubTitleReviews,
  TitleReviews,
  WrapperAvatar,
  WrapperComment,
  WrapperNameText,
  WrapperPerson,
  WrapperReviews,
  WrapperTitleReviews,
  WrapperVideo,
} from "./styles";
import message from "../../assets/icons/message.svg";
import ReviewsMobile from "./ReviewsMobile";
import ReactPlayer from "react-player/lazy";
import marcela from "../../assets/img/marcela.jpg";

const Reviews = ({ isMobile, isTablet }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    setShowPlayer(true);
  }, []);

  return (
    <WrapperReviews>
      {isMobile ? (
        <ReviewsMobile />
      ) : (
        <>
          <WrapperTitleReviews>
            <TitleReviews>Reseñas:</TitleReviews>
            <SubTitleReviews>Comentarios sobre Bangk</SubTitleReviews>
          </WrapperTitleReviews>
          <RowReviews>
            <Col7>
              <WrapperComment>
                <Image alt="message" src={message} />
              </WrapperComment>
              <CommentText>
                “Nunca había apreciado tanto no tener que hacer trámites de
                banco y que me permiten ahorrar.”
              </CommentText>
              <Line />
              <WrapperPerson>
                <WrapperAvatar>
                  <Image
                    alt="marcela"
                    src={marcela}
                    style={{ borderRadius: "100%" }}
                  />
                </WrapperAvatar>
                <WrapperNameText>
                  <NameText>Marcela</NameText>
                  <NameText2>Hija, Mamá, Diseñadora</NameText2>
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
                    width={isTablet ? "309px" : "656px"}
                    height={isTablet ? "199px" : "422px"}
                    controls
                    suppressHydrationWarning={true}
                  />
                ) : null}
              </div>
            </Col8>
          </RowReviews>
        </>
      )}
    </WrapperReviews>
  );
};

export default Reviews;
