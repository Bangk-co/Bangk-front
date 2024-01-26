import React from "react";
import { CustomDrawer } from "./styles";
import { Link } from "@/components/Common/Link";

export const Drawer = ({
  closelabel,
  closeIcon,
  onClose,
  children,
  ...rest
}) => {
  return (
    <CustomDrawer
      closelabel={closelabel}
      closeIcon={closeIcon}
      anchor="right"
      onClose={onClose}
      ModalProps={{ onBackdropClick: onClose }}
      {...rest}
    >
      {closeIcon && (
        <Link className="MuiDrawer-close" onClick={onClose}>
          {closeIcon}
        </Link>
      )}
      {children}
    </CustomDrawer>
  );
};
