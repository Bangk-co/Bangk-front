import { useRouter } from "next/router";
import { useMemo, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { theme } from "../../../styles/theme";
import { Text } from "@/styles/Common";
import Table from "@/components/Common/Table";
import { Div, Row } from "@/styles/Common";
import useGetClients from "@/hooks/Customers/useGetClients";
import useDebounce from "@/hooks/useDebounce";
import {
  formattedDate,
  formattedPrice,
  renderStateDiv,
} from "@/utilities/helpers";
import { setSelectedClientInformation } from "@/store/customers";
import filterIcon from "../../../assets/icons/filter.svg";
import searchIcon from "../../../assets/icons/search.svg";
import { TextField } from "@/components/Common/TextField";

const Customers = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [forceUpdate, setForceUpdate] = useState(true);
  const [pages, setPages] = useState({ pageNumber: 1, pageSize: 8 });

  const [totalItems, setTotalItems] = useState(10);
  const [searchText, setSearchText] = useState(null);
  const searchValue = useDebounce(searchText, 600);

  const [payloadOptions, setPayloadOptions] = useState({
    page: pages.pageNumber,
    pageSize: pages.pageSize,
    searchBy: searchValue,
  });

  const handleChangeSearch = (event) => {
    const { value } = event.target;
    setSearchText(value);
  };

  function calculatePages(pageSize, totalItems) {
    const totalPages = Math.ceil(totalItems / pageSize);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }
  const paginationArray = calculatePages(pages.pageSize, totalItems);

  const getClients = useGetClients(payloadOptions);
  const { data, isLoading, isFetching } = getClients;

  const [clientsList, setClientsList] = useState([]);
  useEffect(() => {
    if (!isLoading && !isFetching) {
      setClientsList(data?.data?.clients?.items);
      setTotalItems(data?.data?.clients?.totalItems);
    }
  }, [data, isLoading, isFetching]);

  useEffect(() => {
    setPayloadOptions({
      ...payloadOptions,
      page: pages.pageNumber,
      pageSize: pages.pageSize,
      searchBy: searchValue,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages, searchValue]);

  const handleChangeTable = (newPage) => {
    setPages({
      pageNumber: newPage,
      pageSize: pages.pageSize,
    });

    setForceUpdate(!forceUpdate);
  };

  const tableColumns = useMemo(
    () => [
      {
        title: "Cliente",
        dataIndex: "name",
        key: "name",
        width: 200,
        sorter: true,
      },
      {
        title: "Fecha de creación",
        dataIndex: "creationDate",
        key: "creationDate",
        width: 200,
        sorter: true,
        render: (value, record) => <span>{formattedDate(value)}</span>,
      },
      {
        title: "Solicitudes",
        dataIndex: "applications",
        key: "applications",
        width: 150,
        sorter: true,
      },
      {
        title: "Monto Asegurado",
        dataIndex: "loanBalance",
        key: "loanBalance",
        width: 180,
        sorter: true,
        render: (value, record) => <span>{formattedPrice(value)}</span>,
      },
      {
        title: "Ventas",
        dataIndex: "sales",
        key: "sales",
        width: 150,
        sorter: true,
        render: (value, record) => <span>{formattedPrice(value)}</span>,
      },
      {
        title: "Asesor",
        dataIndex: "reviewerName",
        key: "reviewerName",
        width: 150,
        sorter: true,
      },
      {
        title: "Estado",
        dataIndex: "stateName",
        key: "stateName",
        width: 180,
        sorter: true,
        render: (value, record) => renderStateDiv(value),
      },
    ],
    []
  );

  const handleRow = (row) => {
    console.log("row", row);
    dispatch(setSelectedClientInformation(row));
    router.push("/plataforma/clientes/cliente");
  };

  return (
    <Div direction="column" width="100%">
      <Row
        m="0 0 37px 0"
        gap="16px"
        width="100%"
        align="center"
        justify="space-between"
      >
        <Text weight={theme.fonts.weight.bold} size={theme.fonts.size.h2}>
          Clientes
        </Text>
        <Row gap="8px" align="center">
          <Image
            alt="filter"
            src={filterIcon}
            width={16}
            height={16}
            onClick={() => {}}
            style={{ cursor: "pointer" }}
          />
          <Text
            weight={theme.fonts.weight.semibold}
            size={theme.fonts.size.default2}
            color={theme.colors.neutralGray900}
          >
            Filtros
          </Text>
          <Row m="0 0 0 34px">
            <TextField
              placeholder={"Buscar por palabra clave"}
              id="search"
              radius="4px"
              width="236px"
              height="40px"
              border={theme.colors.neutralGray200}
              font={theme.fonts.family.primary}
              prefixIcon={
                <Image alt="search" src={searchIcon} width={12} height={12} />
              }
              onChange={handleChangeSearch}
            />
          </Row>
        </Row>
      </Row>
      <Table
        columns={tableColumns}
        data={clientsList}
        page={pages.pageNumber}
        pages={paginationArray}
        onPageChange={handleChangeTable}
        handleRow={handleRow}
        loading={isLoading}
      />
    </Div>
  );
};

export default Customers;
