import styled from "styled-components";
/* import { Table } from "antd"; */
import { theme } from "../../../styles/theme";
import { Table, TablePagination } from "@mui/material";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${theme.colors.white};
`;

export const CustomTable = styled(Table)`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  overflow: hidden;

  .MuiTableHead-root {
    background-color: ${theme.colors.gray100};
  }
  .MuiTableHead-root .MuiTableCell-root {
    padding: 16px;
    font-size: ${theme.fonts.size.sm};
    font-weight: ${theme.fonts.weight.bold};
    font-family: ${theme.fonts.family.primary};
  }

  .MuiTableRow-root {
    border-bottom: 1px solid #d3d3d3;
  }

  .MuiTableCell-root {
    padding: 32px 16px;
    font-size: ${theme.fonts.size.sm};
    font-weight: ${theme.fonts.weight.regular};
    font-family: ${theme.fonts.family.primary};
  }

  .MuiTablePagination-root {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #d3d3d3;
    padding: 16px;
  }

  .MuiTablePagination-actions {
    flex-shrink: 0;
    margin-right: 16px;
  }

  .MuiTablePagination-input {
    margin-right: 16px;
  }

  .MuiTablePagination-spacer {
    display: none;
  }

  .MuiTablePagination-select {
    display: none;
  }

  .MuiTablePagination-caption {
    display: none;
  }
`;
