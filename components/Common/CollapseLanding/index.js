import React, { useState } from "react";
import Image from "next/image";
import { CustomCollapse } from "./styles";
import arrowUp from "@/assets/icons/arrow-up-white.svg";
import arrowDown from "@/assets/icons/arrow-down-white.svg";
import { Divider } from "antd";
import { theme } from "@/styles/theme";
import { DownCircleOutlined, UpCircleOutlined } from "@ant-design/icons";
import { Col, Div, Text } from "@/styles/Common";

const { Panel } = CustomCollapse;

export const CollapseLanding = ({
  panels,
  width,
  group,
  activeKey,
  setActiveKey,
  textAlign,
  headerFontSize,
}) => {
  const handlePanelChange = (key) => {
    setActiveKey(key);
  };

  return (
    <CustomCollapse
      accordion
      activeKey={activeKey}
      onChange={handlePanelChange}
      expandIcon={({ isActive }) =>
        isActive ? (
          <UpCircleOutlined
            style={{ fontSize: "24px", color: theme.colors.gray200 }}
          />
        ) : (
          <DownCircleOutlined
            style={{ fontSize: "24px", color: theme.colors.gray200 }}
          />
        )
      }
      expandIconPosition={"end"}
      style={{
        background: theme.colors.white,
        border: "none",
        width: "100%",
      }}
      width={width}
      group={group}
      textAlign={textAlign}
      headerFontSize={headerFontSize}
    >
      {panels.map((ele, indx) => (
        <>
          <Panel
            id={indx}
            key={ele.key}
            header={
              <>
                <Div
                  style={{
                    justifySelf: textAlign,
                    textAlign: textAlign || "left",
                  }}
                >
                  {ele.header}
                </Div>
                {ele.summary && !activeKey.includes(ele.key) && (
                  <Div
                    direction="column"
                    style={{ textAlign: textAlign || "left" }}
                  >
                    <Text
                      color={theme.colors.green}
                      font={theme.fonts.family.primary}
                      size={theme.fonts.size.md}
                      mt="10px"
                      dangerouslySetInnerHTML={{ __html: ele.summary }}
                    />
                    <Text
                      color={theme.colors.orange}
                      font={theme.fonts.family.primary}
                      size={theme.fonts.size.xs}
                      mt="10px"
                    >
                      Leer mas
                    </Text>
                  </Div>
                )}
              </>
            }
          >
            {group && (
              <Divider
                style={{ margin: "0px", background: theme.colors.gray100 }}
              />
            )}
            <div dangerouslySetInnerHTML={{ __html: ele.panel }} />
          </Panel>
          <Divider
            style={{ margin: "10px 0", background: theme.colors.green }}
          />
        </>
      ))}
    </CustomCollapse>
  );
};
