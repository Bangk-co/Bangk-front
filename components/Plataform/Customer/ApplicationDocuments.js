import { useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import { Grid } from "@mui/material";
import { Row, Text, Div, Col } from "@/styles/Common";
import { Link } from "@/components/Common/Link";
import { theme } from "../../../styles/theme";
import { formattedDate } from "@/utilities/helpers";
import { DocumentCard } from "./styles";
import downloadIcon from "../../../assets/icons/download.svg";
import useGetDownloadDocument from "@/hooks/Customers/useGetDownloadDocument";
import { downloadFile } from "@/utilities/helpers";

const ApplicationDocuments = ({ documents }) => {
  const personalDocument = {
    createDocumentDate: documents?.createIdentificationDate,
    documentName: documents?.identificationName,
    documentId: documents?.documentIdentificationId,
  };

  const bankStatements = documents?.clientDocumentListDtos
    .filter((doc) => doc.documentType === 0)
    .map((doc) => doc.documentByTypeDtos)
    .flat();

  const insurancePolicies = documents?.clientDocumentListDtos
    .filter((doc) => doc.documentType === 1)
    .map((doc) => doc.documentByTypeDtos)
    .flat();

  const endorsementLetters = documents?.clientDocumentListDtos
    .filter((doc) => doc.documentType === 2)
    .map((doc) => doc.documentByTypeDtos)
    .flat();

  const handleDownload = async (documentInfo, downloadDocument) => {
    downloadFile(
      downloadDocument?.data?.request?.responseURL,
      `${documentInfo.documentName}-${formattedDate(
        documentInfo.createDocumentDate
      )}`
    );
  };

  const DocumentInfoCard = ({ document }) => {
    const downloadDocument = useGetDownloadDocument(document.documentId);

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
          onClick={() => handleDownload(document, downloadDocument)}
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
      {personalDocument?.documentId && (
        <Row>
          <DocumentInfoCard document={personalDocument} />
        </Row>
      )}
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
        {bankStatements?.map((extract, index) => (
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
      <Grid container spacing={2}>
        {insurancePolicies?.map((extract, index) => (
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
          Cartas de endoso
        </Text>
      </Row>
      <Row m="0 0 24px 0">
        {endorsementLetters?.map((extract, index) => (
          <Grid item xs={6} key={index}>
            <DocumentInfoCard document={extract} />
          </Grid>
        ))}
      </Row>
    </Col>
  );
};

export default ApplicationDocuments;
