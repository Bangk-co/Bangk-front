import React from "react";
import whatsapp from "../../assets/icons/white-whatsapp.svg";
import instagram from "../../assets/icons/instagram.svg";
import youtube from "../../assets/icons/youtube.svg";
import facebook from "../../assets/icons/facebook.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import { Div } from "@/styles/Common";
import Image from "next/image";

const Social = () => {
  const social = [
    { icon: whatsapp, width: "30.81px", height: "31px", url: "" },
    {
      icon: instagram,
      width: "29.04px",
      height: "29.04px",
      url: "https://instagram.com/bangk.la?igshid=YmMyMTA2M2Y=",
    },
    {
      icon: youtube,
      width: "36.65px",
      height: "28.87px",
      url: "https://www.youtube.com/channel/UCjSLd2vGNAYXOe3bEP95r3w",
    },
    {
      icon: facebook,
      width: "28.84px",
      height: "28.84",
      url: "https://www.facebook.com/profile.php?id=100088206895839",
    },
    {
      icon: linkedin,
      width: "24px",
      height: "24px",
      url: "https://www.linkedin.com/company/91508522/admin/?feedType=following",
    },
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
