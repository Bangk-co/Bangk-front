import React from "react";
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

const Reviews = ({ isMobile }) => {
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
                <WrapperAvatar />
                <WrapperNameText>
                  <NameText>Samuel Valencia</NameText>
                  <NameText2>Padre de familia y administrador,</NameText2>
                </WrapperNameText>
              </WrapperPerson>
            </Col7>
            <Col8>
              <WrapperVideo />
            </Col8>
          </RowReviews>
        </>
      )}
    </WrapperReviews>
  );
};

export default Reviews;
