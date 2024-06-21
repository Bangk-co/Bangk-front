import { Button } from "@/components/Common/Button";
import { theme } from "@/styles/theme";
import { Grid } from "@mui/material";
import React from "react";

export const UploadYellowButton = ({ handleChange, id }) => {
  const handleButtonClick = () => {
    const input = document.getElementById(`file-upload-${id}-yellow`);
    if (input) {
      input.click();
    }
  };

  return (
    <Grid item md={2} xs={2}>
      <label htmlFor={`file-upload-${id}-yellow`}>
        <input
          style={{ display: 'none' }}
          id={`file-upload-${id}-yellow`}
          type="file"
          multiple
          onChange={(event) => handleChange(event, id)}
        />
        <Button
          font={theme.fonts.family.primaryBold}
          background={theme.colors.yellow500}
          hover={theme.colors.yellow500}
          border={theme.colors.yellow500}
          borderHover={theme.colors.yellow500}
          labelColor={theme.colors.green900}
          size={theme.fonts.size.default2}
          width={"100%"}
          mobileWidth={"100%"}
          height={"40px"}
          radius={"4px"}
          style={{ marginTop: "19px" }}
          onClick={handleButtonClick}
        >
          Subir
        </Button>
      </label>
    </Grid>
  )
}