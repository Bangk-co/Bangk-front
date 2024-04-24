import Image from "next/image";
import { useRouter } from "next/router";
import { FooterDiv, AddDiv } from "./styles";
import { Div, Col, Text } from "@/styles/Common";
import { Link } from "@/components/Common/Link";
import { theme } from "../../../styles/theme";
import homeIcon from "../../../assets/icons/home.svg";
import homeIconWhite from "../../../assets/icons/homeWhite.svg";
import isuranceIcon from "../../../assets/icons/insurance.svg";
import insuranceIconWhite from "../../../assets/icons/insuranceWhite.svg";
import profileIconWhite from "../../../assets/icons/profileWhite.svg";
import addIcon from "../../../assets/icons/addFill.svg";

export const FooterNav = ({ children, padding }) => {
  const router = useRouter();
  const { pathname } = router;

  const items = [
    {
      icon: (active) => (
        <Image
          alt="logo"
          src={active ? homeIcon : homeIconWhite}
          width={24}
          height={24}
          style={{ cursor: "pointer" }}
        />
      ),
      name: "Home",
      handleClick: () => router.push("/plataforma-cliente/home"),
      path: "home",
    },
    {
      icon: (active) => (
        <Image
          alt="logo"
          src={active ? isuranceIcon : insuranceIconWhite}
          width={24}
          height={24}
          style={{ cursor: "pointer", stroke: "red" }}
        />
      ),
      name: "Seguros",
      handleClick: () => router.push("/plataforma-cliente/seguros"),
      path: "seguro",
    },
  ];

  return (
    <FooterDiv>
      {items.map((item, ind) => (
        <Div key={ind}>
          <Link
            height="47px"
            width="48px"
            padding="0px 0px 0px 16px"
            radius="16px 16px 0px 0px"
            onClick={item.handleClick}
            background={pathname.includes(item.path) && theme.colors.yellow500}
            hover={pathname.includes(item.path) && theme.colors.yellow500}
          >
            <Div align="center" gap="8px">
              {item.icon(pathname.includes(item.path))}
            </Div>
          </Link>
        </Div>
      ))}
      <AddDiv>
        <Image
          alt="logo"
          src={addIcon}
          width={24}
          height={24}
          style={{ cursor: "pointer" }}
        />
      </AddDiv>
    </FooterDiv>
  );
};
