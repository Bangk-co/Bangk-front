import { useRouter } from "next/router";
import { useMemo } from "react";
import { theme } from "../../../styles/theme";
import { Text } from "@/styles/Common";
import Table from "@/components/Common/Table";
import { Div, Row } from "@/styles/Common";
import { Link } from "@/components/Common/Link";

const Customers = ({ isMobile, isTablet }) => {
  const router = useRouter();

  const tableColumns = useMemo(
    () => [
      {
        title: "Cliente",
        dataIndex: "client",
        key: "client",
        width: 200,
        sorter: true,
      },
      {
        title: "Fecha de creación",
        dataIndex: "createdAt",
        key: "createdAt",
        width: 200,
        sorter: true,
      },
      {
        title: "Solicitudes",
        dataIndex: "requests",
        key: "requests",
        width: 150,
        sorter: true,
      },
      {
        title: "Monto Asegurado",
        dataIndex: "insuredAmount",
        key: "insuredAmount",
        width: 180,
        sorter: true,
      },
      {
        title: "Ventas",
        dataIndex: "sales",
        key: "sales",
        width: 150,
        sorter: true,
      },
      {
        title: "Asesor",
        dataIndex: "advisor",
        key: "advisor",
        width: 150,
        sorter: true,
      },
      {
        title: "Estado",
        dataIndex: "state",
        key: "state",
        width: 180,
        sorter: true,
      },
    ],
    []
  );

  const data = [
    {
      client: "name",
      createdAt: "01-12-22",
      requests: 2,
      insuredAmount: 20000,
      sales: 2,
      advisor: "name",
      state: "Pending",
    },
    {
      client: "name",
      createdAt: "01-13-22",
      requests: 2,
      insuredAmount: 20000,
      sales: 2,
      advisor: "name",
      state: "Pending",
    },
    {
      client: "name",
      createdAt: "01-14-22",
      requests: 2,
      insuredAmount: 20000,
      sales: 2,
      advisor: "name",
      state: "Pending",
    },
  ];

  return (
    <Div direction="column" width="100%">
      <Row m="0 0 37px 0">
        <Text weight={theme.fonts.weight.bold} size={theme.fonts.size.h2}>
          Clientes
        </Text>
      </Row>
      <Table columns={tableColumns} data={data} />
    </Div>
  );
};

export default Customers;
