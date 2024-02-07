import { useState } from "react";
import Image from "next/image";
import { Grid } from "@mui/material";
import { Row, Text, Div, Col } from "@/styles/Common";
import { Link } from "@/components/Common/Link";
import { theme } from "../../../styles/theme";
import { formattedDate, formattedPrice } from "@/utilities/helpers";
import { DocumentCard } from "./styles";
import downloadIcon from "../../../assets/icons/download.svg";

const ApplicationDocuments = ({ documents }) => {
  const [personalDocument, setPersonalDocuments] = useState({
    createDocumentDate: documents.createIdentificationDate,
    documentName: documents.identificationName,
    documentUrl: documents.identificationUrl,
  });
  const [extractDocuments, setRxtractDocuments] = useState(
    documents?.clientDocumentListDtos[0].documentByTypeDtos
  );

  const DocumentInfoCard = ({ document }) => {
    return (
      <DocumentCard>
        <Col width="100%">
          <Text
            font={theme.fonts.family.primaryBold}
            size={theme.fonts.size.default2}
            color={theme.colors.neutralGray900}
          >
            {document?.documentName}
          </Text>
          <Text
            font={theme.fonts.family.primary}
            size={theme.fonts.size.sm}
            color={theme.colors.neutralGray900}
            weight={theme.fonts.weight.regular}
          >
            Fecha de carga
          </Text>
          <Text
            font={theme.fonts.family.primary}
            size={theme.fonts.size.sm}
            color={theme.colors.neutralGray900}
            weight={theme.fonts.weight.regular}
          >
            {formattedDate(document?.createDocumentDate)}
          </Text>
        </Col>
        <Link
          onClick={() => {
            console.log("download");
          }}
          color="transparent"
        >
          <Image alt="download" src={downloadIcon} width={24} height={24} />
        </Link>
      </DocumentCard>
    );
  };

  return (
    <Col width="100%" height="100%" gap="24px" m="0 0 24px 0">
      <Row>
        <Text
          color={theme.colors.neutralGray900}
          size={theme.fonts.size.h6}
          font={theme.fonts.family.primaryBold}
        >
          Información personal
        </Text>
      </Row>
      <Row>
        <DocumentInfoCard document={personalDocument} />
      </Row>
      <Row>
        <Text
          color={theme.colors.neutralGray900}
          size={theme.fonts.size.default2}
          font={theme.fonts.family.primaryBold}
        >
          Extractos
        </Text>
      </Row>
      <Grid container spacing={2}>
        {extractDocuments.map((extract, index) => (
          <Grid item xs={6} key={index}>
            <DocumentInfoCard document={extract} />
          </Grid>
        ))}
      </Grid>

      <Row>
        <Text
          color={theme.colors.neutralGray900}
          size={theme.fonts.size.default2}
          font={theme.fonts.family.primaryBold}
        >
          Pólizas
        </Text>
      </Row>
      <Grid container spacing={2}></Grid>

      <Row>
        <Text
          color={theme.colors.neutralGray900}
          size={theme.fonts.size.default2}
          font={theme.fonts.family.primaryBold}
        >
          Cartas de endoso
        </Text>
      </Row>
      <Row m="0 0 24px 0"></Row>
    </Col>
  );
};

export default ApplicationDocuments;
