import { Text, Row, Col } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { numberFormat } from "@/utilities/helpers";

export const FinancialData = ({ financialInfo }) => {
  const RowInfo1 = [
    {
      title: "Ingresos mensuales",
      description: numberFormat(financialInfo.monthlyIncome),
    },
    {
      title: "Gastos mensuales",
      description: numberFormat(financialInfo.monthlyExpenses),
    },
    {
      title: "Valor de tus activos",
      description: numberFormat(financialInfo.assetValue),
    },
    {
      title: "Valor de tus pasivos",
      description: numberFormat(financialInfo.liabilitiesValue),
    },
  ];

  return (
    <Col gap="16px" m="24px 0 0 0">
      <Row width="100%" m="16px 0 16px 0" gap="16px">
        {RowInfo1.map((data, index) => (
          <Col key={index} gap="10px" width="237px">
            <Text
              font={theme.fonts.family.primaryBold}
              size={theme.fonts.size.sm}
              color={theme.colors.neutralGray900}
            >
              {data.title}
            </Text>
            <Text
              font={theme.fonts.family.primary}
              size={theme.fonts.size.default2}
              weight={theme.fonts.weight.regular}
              color={theme.colors.neutralGray900}
            >
              {data.description || "--"}
            </Text>
          </Col>
        ))}
      </Row>
    </Col>
  );
};
