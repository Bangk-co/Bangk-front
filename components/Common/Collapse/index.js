import React, { useState } from "react";
import Image from "next/image";
import { CustomCollapse } from "./styles";
import arrowUp from "@/assets/icons/arrow-up-white.svg";
import arrowDown from "@/assets/icons/arrow-down-white.svg";
import { Divider } from "antd";
import { theme } from "@/styles/theme";

const { Panel } = CustomCollapse;

export const Collapse = ({ panels, width, group, activeKey, setActiveKey }) => {

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
          <Image alt="arrow-up" src={arrowUp} />
        ) : (
          <Image alt="arrow-down" src={arrowDown} />
        )
      }
      expandIconPosition={"end"}
      style={{
        background: theme.colors.green,
        border: "none",
        width: "100%",
      }}
      width={width}
      group={group}
    >
      {panels.map((ele, indx) => (
        <Panel
          id={indx}
          key={ele.key}
          header={ele.header}
        >
          {group && (<Divider style={{ margin: "0px", background: theme.colors.gray100 }} />)}
          {ele.panel}
        </Panel>
      ))}
    </CustomCollapse>
  );
};
