import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { theme } from "@/styles/theme";
import {
  WrapperImage,
  WrapperUpStar,
  WrapperDownStar,
  WrapperRightStar,
} from "@/components/Login/styles";
import woman from "../../assets/img/surprised-woman-orange.svg";
import star from "../../assets/icons/gray-star.svg";

const Banner = () => {
  return (
    <WrapperImage>
      <WrapperUpStar>
        <Image alt="star" src={star} width={180} height={180} />
      </WrapperUpStar>
      <Image
        alt="surprised-women"
        src={woman}
        width={
          useMediaQuery({
            query: `(max-width: ${theme.breakpoints.xl})`,
          })
            ? 337
            : 600
        }
        height={
          useMediaQuery({
            query: `(max-width: ${theme.breakpoints.xl})`,
          })
            ? 336
            : 600
        }
        style={{ zIndex: theme.zIndex.overlay }}
      />
      <WrapperDownStar>
        <Image alt="star" src={star} width={366} height={366} />
      </WrapperDownStar>
      <WrapperRightStar>
        <Image alt="star" src={star} width={180} height={180} />
      </WrapperRightStar>
    </WrapperImage>
  );
};

export default Banner;
