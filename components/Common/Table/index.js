import { Wrapper, CustomTable } from "./styles";
import {
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  TablePagination,
} from "@mui/material";
import { Row } from "@/styles/Common";
import { theme } from "../../../styles/theme";
import Image from "next/image";
import sortIcon from "../../../assets/icons/sort.svg";
import { Link } from "@/components/Common/Link";
import { Button } from "@/components/Common/Button";

const Table = ({
  columns,
  data,
  sizerLabels,
  children,
  page,
  pages,
  onPageChange,
  ...rest
}) => {
  return (
    <Wrapper>
      <CustomTable
        columns={columns}
        data={data}
        sizerLabels={sizerLabels}
        page={page}
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
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column, idx) => (
                <TableCell key={idx}>
                  {column.render
                    ? column.render(row[column.dataIndex], row)
                    : row[column.dataIndex]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </CustomTable>
      <Row m="16px 0 0 0" gap="8px" align="center" justify="center">
        <Link
          onClick={() => onPageChange(page - 1)}
          disabled={page === 0 || page === 1}
          hover={theme.colors.gray100}
          color={theme.colors.black}
        >
          {"<"}
        </Link>
        {pages.map((pageNumber) => (
          <Button
            key={pageNumber}
            width="30px"
            height="30px"
            radius="3px"
            background={
              pageNumber === page ? theme.colors.green900 : theme.colors.white
            }
            labelColor={
              pageNumber === page ? theme.colors.white : theme.colors.black
            }
            hover={
              pageNumber === page ? theme.colors.green900 : theme.colors.gray100
            }
            border={"transparent"}
            size={theme.fonts.size.sm}
            weight={theme.fonts.weight.medium}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </Button>
        ))}
        <Link
          onClick={() => onPageChange(page + 1)}
          disabled={page === Math.ceil(data.length / 2)}
          hover={theme.colors.gray100}
          color={theme.colors.black}
        >
          {">"}
        </Link>
      </Row>
    </Wrapper>
  );
};

export default Table;
