import React from "react";
import Image from "next/image";
import {
  CommentText,
  NameText,
  NameText2,
  SubTitleReviews,
  TitleReviews,
  WrapperAvatar,
  WrapperComment,
  WrapperNameText,
  WrapperPerson,
  WrapperVideo,
} from "./styles";
import message from "../../assets/icons/message.svg";

const ReviewsMobile = () => {
  return (
    <>
      <TitleReviews>Reseñas</TitleReviews>
      <WrapperVideo />
      <WrapperComment>
        <Image alt="message" src={message} />
      </WrapperComment>
      <SubTitleReviews>Comentarios sobre Bangk</SubTitleReviews>
      <CommentText>
        “Nunca había apreciado tanto no tener que hacer trámites de banco y que
        me permiten ahorrar.”
      </CommentText>
      <WrapperPerson>
        <WrapperAvatar />
        <WrapperNameText>
          <NameText>Samuel Valencia</NameText>
          <NameText2>Padre de familia y administrador,</NameText2>
        </WrapperNameText>
      </WrapperPerson>
    </>
  );
};

export default ReviewsMobile;
