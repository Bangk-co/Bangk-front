import React from "react";

import { TableSkeleton } from "./Skeleton";

import { Wrapper, CustomTable } from "./styles";
import { TableRow, TableCell, TableHead } from "@mui/material";
import { Row } from "@/styles/Common";
import Image from "next/image";
import sortIcon from "../../../assets/icons/sort.svg";

const Table = ({ columns, data, sizerLabels, children, ...rest }) => {
  return (
    <Wrapper>
      <CustomTable
        columns={columns}
        data={data}
        sizerLabels={sizerLabels}
        {...rest}
      >
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.key} width={column.width}>
                {column.sorter ? (
                  <Row justify="space-between" align="center">
                    {column.title}
                    <Image
                      alt="sort"
                      src={sortIcon}
                      width={14}
                      height={16}
                      /* onClick={handleHome} */
                      style={{ cursor: "pointer" }}
                    />
                  </Row>
                ) : (
                  column.title
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        {data.map((row, index) => (
          <TableRow key={index}>
            {columns.map((column, idx) => (
              <TableCell key={idx}>{row[column.dataIndex]}</TableCell>
            ))}
          </TableRow>
        ))}
      </CustomTable>
    </Wrapper>
  );
};

Table.defaultProps = {
  sizerLabels: ["Show", "Results"],
};

Table.Skeleton = TableSkeleton;

export default Table;
