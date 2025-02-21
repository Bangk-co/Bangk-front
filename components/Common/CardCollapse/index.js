import React from "react";
import Image from "next/image";
import { CustomCollapse, Divider } from "./styles";
import arrowUp from "@/assets/icons/arrow-up.svg";
import arrowDown from "@/assets/icons/arrow-down.svg";
import { theme } from "@/styles/theme";

const { Panel } = CustomCollapse;

export const CardCollapse = ({ panels, width, height, activeKey, setActiveKey }) => {

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
        background: theme.colors.light,
        border: "none",
        width: "100%",
      }}
      width={width}
      height={height}
    >
      {panels.map((ele, indx) => (
        <Panel
          id={indx}
          key={ele.key}
          header={ele.header}
        >
          <Divider />
          {ele.panel}
        </Panel>
      ))}
    </CustomCollapse>
  );
};
