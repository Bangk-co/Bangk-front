import React, { useEffect, useState } from "react";
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
import ReactPlayer from "react-player/lazy";
import marcela from "../../assets/img/marcela.jpg";

const ReviewsMobile = () => {
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    setShowPlayer(true);
  }, []);

  return (
    <>
      <TitleReviews>Reseñas</TitleReviews>
      <div
        id="review-video"
        style={{
          borderRadius: "24px",
          overflow: "hidden",
          marginBottom: "16px",
          height: "142px",
        }}
      >
        {showPlayer ? (
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=ay7WaSaPp0k&ab_channel=Bangk"}
            width={"219px"}
            height={"142px"}
            controls
            suppressHydrationWarning={true}
          />
        ) : null}
      </div>
      <WrapperComment>
        <Image alt="message" src={message} />
      </WrapperComment>
      <SubTitleReviews>Comentarios sobre Bangk</SubTitleReviews>
      <CommentText>
        “Nunca había apreciado tanto no tener que hacer trámites de banco y que
        me permiten ahorrar.”
      </CommentText>
      <WrapperPerson>
        <WrapperAvatar>
          <Image alt="marcela" src={marcela} style={{ borderRadius: "100%" }} />
        </WrapperAvatar>
        <WrapperNameText>
          <NameText>Marcela</NameText>
          <NameText2>Hija, Mamá, Diseñadora</NameText2>
        </WrapperNameText>
      </WrapperPerson>
    </>
  );
};

export default ReviewsMobile;
