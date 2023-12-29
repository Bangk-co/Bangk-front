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
            width={219}
            height={142}
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
        “Fue como WOW, no sabía que era endosar un seguro, no sabía que podía
        cambiar el seguro que me cobran en la cuota del crédito” … y ahorrar
        dinero
      </CommentText>
      <WrapperPerson>
        <WrapperAvatar>
          <Image
            alt="marcela"
            src={marcela}
            style={{ borderRadius: "100%" }}
            width={22}
            height={22}
          />
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
