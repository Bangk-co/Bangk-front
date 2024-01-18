import Image from "next/image";
import { useRouter } from "next/router";
import { WrapperContent, WrapperLayout, Sider, Content } from "./styles";
import { Div, Col, Text } from "@/styles/Common";
import { Link } from "@/components/Common/Link";
import { theme } from "../../../styles/theme";
import homeIcon from "../../../assets/icons/home.svg";
import homeIconWhite from "../../../assets/icons/homeWhite.svg";
import idIcon from "../../../assets/icons/identification.svg";
import idIconWhite from "../../../assets/icons/identificationWhite.svg";
import moneyIcon from "../../../assets/icons/money.svg";
import moneyIconWhite from "../../../assets/icons/moneyWhite.svg";
import calculatorIcon from "../../../assets/icons/calculator.svg";
import calculatorIconWhite from "../../../assets/icons/calculatorWhite.svg";

export const Layout = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;
  console.log("pathname", pathname.includes("plataforma"));

  const items = [
    {
      icon: (active) => (
        <Image
          alt="logo"
          src={active ? homeIcon : homeIconWhite}
          width={24}
          height={24}
          style={{ cursor: "pointer", stroke: "red" }}
        />
      ),
      name: "Home",
      handleClick: () => {
        router.push("/home");
      },
      path: "/plataforma",
    },
    {
      icon: (active) => (
        <Image
          alt="logo"
          src={active ? idIcon : idIconWhite}
          width={24}
          height={24}
          style={{ cursor: "pointer", stroke: "red" }}
        />
      ),
      name: "Clientes",
      handleClick: () => {
        router.push("/home");
      },
      path: "/home",
    },
    {
      icon: (active) => (
        <Image
          alt="logo"
          src={active ? moneyIcon : moneyIconWhite}
          width={24}
          height={24}
          style={{ cursor: "pointer", stroke: "red" }}
        />
      ),
      name: "Solicitudes",
      handleClick: () => {
        router.push("/home");
      },
      path: "/home",
    },
    {
      icon: (active) => (
        <Image
          alt="logo"
          src={active ? calculatorIcon : calculatorIconWhite}
          width={24}
          height={24}
          style={{ cursor: "pointer", stroke: "red" }}
        />
      ),
      name: "Reportes",
      handleClick: () => {
        router.push("/home");
      },
      path: "/home",
    },
  ];

  return (
    <WrapperLayout>
      <>
        <WrapperContent>
          <Sider>
            {items.map((item, ind) => (
              <Div key={ind}>
                <Link
                  height="93px"
                  width="134px"
                  padding="0px 0px 0px 16px"
                  m="0px 0px 16px 20px"
                  radius="0px 16px 16px 0px"
                  onClick={item.handleClick}
                  background={
                    pathname.includes(item.path) && theme.colors.yellow500
                  }
                >
                  <Col align="center" gap="8px">
                    {item.icon(pathname.includes(item.path))}
                    <Text
                      size={theme.fonts.size.sm}
                      weight={
                        pathname.includes(item.path)
                          ? theme.fonts.weight.bold
                          : theme.fonts.weight.regular
                      }
                      color={
                        pathname.includes(item.path)
                          ? theme.colors.green900
                          : theme.colors.white
                      }
                    >
                      {item.name}
                    </Text>
                  </Col>
                </Link>
              </Div>
            ))}
            <Div style={{ marginTop: "auto" }}>
              <Link
                height="93px"
                width="134px"
                padding="0px 0px 0px 16px"
                m="0px 0px 16px 20px"
                radius="0px 16px 16px 0px"
                onClick={() => {
                  router.push("/home");
                }}
                background={
                  pathname.includes("/config") && theme.colors.yellow500
                }
              >
                <Col align="center" gap="8px">
                  <Image
                    alt="logo"
                    src={
                      pathname.includes("/config")
                        ? calculatorIcon
                        : calculatorIconWhite
                    }
                    width={24}
                    height={24}
                    style={{ cursor: "pointer", stroke: "red" }}
                  />
                  <Text
                    size={theme.fonts.size.sm}
                    weight={
                      pathname.includes("/config")
                        ? theme.fonts.weight.bold
                        : theme.fonts.weight.regular
                    }
                    color={
                      pathname.includes("/config")
                        ? theme.colors.green900
                        : theme.colors.white
                    }
                  >
                    Configuración
                  </Text>
                </Col>
              </Link>
            </Div>
          </Sider>
          <Content> {children}</Content>
        </WrapperContent>
      </>
    </WrapperLayout>
  );
};
