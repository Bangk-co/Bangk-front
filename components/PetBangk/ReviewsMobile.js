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
} from "./styles";
import message from "../../assets/img/message.png";
import ReactPlayer from "react-player/lazy";
import reviewPhoto from "../../assets/img/reviewPhoto.png";

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
          height: "122px",
        }}
      >
        {showPlayer ? (
          <ReactPlayer
            url={"/video/petBangkReview.mp4"}
            width={219}
            height={122}
            controls
            suppressHydrationWarning={true}
          />
        ) : null}
      </div>
      <WrapperComment>
        <Image alt="message" src={message} width={20} height={17} />
      </WrapperComment>
      <SubTitleReviews>Comentarios sobre Bangk</SubTitleReviews>
      <CommentText>
        &quot;Ellos me ayudaron a resolver un problema que tenia Toby sin tener que transportarme y sin tener que gastar altas cantidades de dinero, con Bangk la solución para tu mascota está aquí.&quot;
      </CommentText>
      <WrapperPerson>
        <WrapperAvatar>
          <Image
            alt="reviewPhoto"
            src={reviewPhoto}
            style={{ borderRadius: "100%" }}
            width={22}
            height={22}
          />
        </WrapperAvatar>
        <WrapperNameText>
          <NameText>Samuel Valencia</NameText>
          <NameText2>Maestro y padre de dos perritos.</NameText2>
        </WrapperNameText>
      </WrapperPerson>
    </>
  );
};

export default ReviewsMobile;
