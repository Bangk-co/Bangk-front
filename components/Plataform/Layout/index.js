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
import settingIcon from "../../../assets/icons/settings.svg";
import Customers from "../Customers";

export const Layout = ({ children, padding }) => {
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
      handleClick: () => router.push("/plataforma/home"),
      path: "home",
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
      handleClick: () => router.push("/plataforma/clientes"),
      path: "clientes",
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
      handleClick: () => {},
      path: "solicitudes",
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
      handleClick: () => {},
      path: "reportes",
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
                  mobileWidth="100px"
                  padding="0px 0px 0px 16px"
                  m="0px 0px 16px 20px"
                  radius="0px 16px 16px 0px"
                  onClick={item.handleClick}
                  background={
                    pathname.includes(item.path) && theme.colors.yellow500
                  }
                  hover={pathname.includes(item.path) && theme.colors.yellow500}
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
                      font={
                        pathname.includes(item.path)
                          ? theme.fonts.family.primaryBold
                          : theme.fonts.family.primary
                      }
                    >
                      {item.name}
                    </Text>
                  </Col>
                </Link>
              </Div>
            ))}

            <Div
              direction={"column"}
              align="center"
              style={{ marginTop: "auto" }}
            >
              <Div
                width="112px"
                justify="center"
                align="center"
                m="0 0 12px 0"
                style={{ border: "1px solid #FFFFFF" }}
              />
              <Link
                height="93px"
                width="134px"
                radius="0px 16px 16px 0px"
                onClick={() => {}}
                background={
                  pathname.includes("configuracion") && theme.colors.yellow500
                }
                hover={
                  pathname.includes("configuracion") && theme.colors.yellow500
                }
              >
                <Col align="center" gap="8px">
                  <Image
                    alt="logo"
                    src={settingIcon}
                    width={24}
                    height={24}
                    style={{ cursor: "pointer" }}
                  />
                  <Text
                    size={theme.fonts.size.sm}
                    weight={theme.fonts.weight.regular}
                    color={theme.colors.white}
                  >
                    Configuración
                  </Text>
                </Col>
              </Link>
            </Div>
          </Sider>
          <Content p={padding}>{children}</Content>
        </WrapperContent>
      </>
    </WrapperLayout>
  );
};
