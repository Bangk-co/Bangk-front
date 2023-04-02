import React from "react";
import whatsapp from "../../assets/icons/white-whatsapp.svg";
import instagram from "../../assets/icons/instagram.svg";
import youtube from "../../assets/icons/youtube.svg";
import facebook from "../../assets/icons/facebook.svg";
import { Div } from "@/styles/Common";
import Image from "next/image";

const Social = () => {
  const social = [
    { icon: whatsapp, width: "30.81px", height: "31px", url: "" },
    { icon: instagram, width: "29.04px", height: "29.04px", url: "" },
    { icon: youtube, width: "36.65px", height: "28.87px", url: "" },
    { icon: facebook, width: "28.84px", height: "28.84", url: "" },
  ];
  return (
    <Div gap="2.24px" height="21px">
      {social.map((ele, indx) => (
        <a key={indx} href={ele.url} target="_blank" rel="noreferrer">
          <Image
            alt="social"
            src={ele.icon}
            width={ele.width}
            height={ele.height}
          />
        </a>
      ))}
    </Div>
  );
};

export default Social;
