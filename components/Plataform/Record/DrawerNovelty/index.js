import React from "react";
import Image from "next/image";
import { Drawer } from "@/components/Common/Drawer";
import closeIcon from "@/assets/icons/close.svg";
import { Div, Row, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import alertIcon from "@/assets/icons/alert-yellow.svg";
import { TextField } from "@/components/Common/TextField";
import { Button } from "@/components/Common/Button";

export const DrawerNovelty = ({ 
  showDrawer, 
  closeDrawer,
  statusName,
  handleSave,
  handleChange,
  isLoading,
  comments
}) => {
  return (
    <Drawer
      closeIcon={<Image alt="close" src={closeIcon} width={20} height={20} />}
      open={showDrawer}
      onClose={closeDrawer}
      width={"402px"}
    >
      <Div direction="column" justify="space-between" height="100%">
        <Div direction="column">
          <Text
            font={theme.fonts.family.primaryBold}
            size={theme.fonts.size.ft}
            color={theme.colors.neutralGray800}
            mb="8px"
          >
            {statusName}
          </Text>
          <Div
            background={theme.colors.yellow100}
            radius="4px"
            p="6px 10px"
            m="0 0 24px 0"
          >
            <Row gap="4px" align="center">
              <Image
                alt="alert"
                src={alertIcon}
                width={16}
                height={16}
              />
              <Text
                color={theme.colors.yellow600}
                font={theme.fonts.family.primaryMedium}
                size={theme.fonts.size.sm}
              >
                Presta una novedad
              </Text>
            </Row>
          </Div>
          <TextField
            label="Comentarios*"
            placeholder="Agregar comentario sobre la novedad"
            radius="4px"
            border={theme.colors.neutralGray500}
            borderHover={theme.colors.neutralGray500}
            placeholderColor={theme.colors.neutralGray500}
            labelFont={theme.fonts.family.primaryMedium}
            labelSize={theme.fonts.size.sm}
            font={theme.fonts.family.primary}
            fontColor={theme.colors.neutralGray900}
            value={comments}
            onChange={handleChange}
          />
        </Div>
        <Div>
          <Button
            background={theme.colors.green900}
            hover={theme.colors.green900}
            borderHover={theme.colors.green900}
            font={theme.fonts.family.primaryBold}
            width="100%"
            height="40px"
            onClick={handleSave}
            disabled={isLoading || comments === ""}
          >
            Guardar
          </Button>
        </Div>
      </Div>
    </Drawer>
  );
};