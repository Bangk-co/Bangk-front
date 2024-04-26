import Image from "next/image";
import { useRouter } from "next/router";
import { WrapperContent, WrapperLayout, Sider, Content } from "./styles";
import { Div, Col, Text } from "@/styles/Common";
import { Link } from "@/components/Common/Link";
import { theme } from "../../../styles/theme";
import homeIcon from "../../../assets/icons/home.svg";
import homeIconWhite from "../../../assets/icons/homeWhite.svg";
import isuranceIcon from "../../../assets/icons/insurance.svg";
import insuranceIconWhite from "../../../assets/icons/insuranceWhite.svg";
import profileIconWhite from "../../../assets/icons/profileWhite.svg";
import profileIcon from "../../../assets/icons/profileClient.svg";

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
          style={{ cursor: "pointer" }}
        />
      ),
      name: "Seguros",
      handleClick: () => router.push("/plataforma-cliente/seguros"),
      path: "seguro",
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
                      size={theme.fonts.size.default2}
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
              m="0 0 66px 0"
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
                onClick={() => router.push("/plataforma-cliente/mi-perfil")}
                background={
                  pathname.includes("mi-perfil") && theme.colors.yellow500
                }
                hover={pathname.includes("mi-perfil") && theme.colors.yellow500}
              >
                <Col align="center" gap="8px">
                  <Image
                    alt="logo"
                    src={
                      pathname.includes("mi-perfil")
                        ? profileIcon
                        : profileIconWhite
                    }
                    width={24}
                    height={24}
                    style={{ cursor: "pointer" }}
                  />
                  <Text
                    size={theme.fonts.size.default2}
                    weight={
                      pathname.includes("mi-perfil")
                        ? theme.fonts.weight.bold
                        : theme.fonts.weight.regular
                    }
                    color={
                      pathname.includes("mi-perfil")
                        ? theme.colors.green900
                        : theme.colors.white
                    }
                    font={
                      pathname.includes("mi-perfil")
                        ? theme.fonts.family.primaryBold
                        : theme.fonts.family.primary
                    }
                  >
                    Perfil
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
