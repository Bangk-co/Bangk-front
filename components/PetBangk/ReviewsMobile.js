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
            url={""}
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
        &quot;Toby ha tenido problemas de salud desde tiempo atrás, gracias a
        Petbangk he podido prevenir y cuidarlo de la mejor manera.&quot;
      </CommentText>
      <WrapperPerson>
        <WrapperAvatar>
          {/* <Image
            alt="samuel"
            src={samuel}
            style={{ borderRadius: "100%" }}
            width={22}
            height={22}
          /> */}
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
