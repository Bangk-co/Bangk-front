import { useState } from "react";
import Image from "next/image";
import { WrapperModal } from "./styles";
import { Text, Row, Div, Col } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { Button } from "@/components/Common/Button";
import close from "@/assets/icons/close.svg";
import ChangePasswordForm from "../ChangePasswordForm";

export const ChangePasswordModal = ({ isMobile, setShowModal }) => {
  return (
    <WrapperModal>
      <Div justify="flex-end">
        <Image
          alt="close"
          src={close}
          style={{ cursor: "pointer" }}
          onClick={() => setShowModal(false)}
        />
      </Div>
      <ChangePasswordForm isMobile={isMobile} setShowModal={setShowModal} />
    </WrapperModal>
  );
};
