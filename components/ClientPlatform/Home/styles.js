import { theme } from "@/styles/theme";
import styled from "styled-components";

export const WraperHome = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-self: flex-start;
  margin: 0 0 100px 0;
`;

export const HeaderHome = styled.div`
  display: flex;
  padding: 40px 0 40px 0;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

export const HeaderHomeMobile = styled.div`
  display: flex;
  padding: 24px;
  margin: 0 0 10px 0;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  box-shadow: 4px 4px 8px 0px #00000014;
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 53px 0;
  justify-content: center;
  align-items: center;
  gap: 21px;
  border-radius: 16px;
  background: ${theme.colors.primary25};
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.08);
`;

export const WrapperSmallCard = styled.div`
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.isMobile ? "auto" : "100%")};
  width: 100%;
  padding: ${(props) => (props.isMobile ? "26px 5px" : "19px 36px")};
  justify-content: center;
  align-items: center;
  gap: 21px;
  border-radius: 16px;
  background: ${theme.colors.primary25};
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.08);
`;

export const ArticleCard = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.isMobile ? "200px" : "352px")};
  gap: 26px;
  border-radius: 16px;
  background: ${theme.colors.white};
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.08);
`;
