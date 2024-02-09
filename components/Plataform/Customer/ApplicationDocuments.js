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
import { axiosClient, getLocalUser } from "@/hooks/services/axiosInstance";

const ApplicationDocuments = ({ documents }) => {
  const personalDocument = {
    createDocumentDate: documents.createIdentificationDate,
    documentName: documents.identificationName,
    documentUrl: documents.identificationUrl,
  };
  const extractDocuments =
    documents?.clientDocumentListDtos[0].documentByTypeDtos;

  const downloadFile = (url, filename) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const handleDownload = async (document) => {
    downloadFile(
      document?.documentUrl,
      `${document.documentName}-${formattedDate(document.createDocumentDate)}`
    );

    // TODO esto está hecho para llamar el endpoint del back
    // await toast.promise(
    //   downloadFile(
    //     document?.documentUrl,
    //     `${document.documentName}-${formattedDate(
    //       document.createDocumentDate
    //     )}`,
    //     axiosClient,
    //     getLocalUser()
    //   ),
    //   {
    //     loading: `Descargando.....`,
    //     success: "Descarga completa",
    //     error: "Fallo la descarga",
    //   }
    // );
  };

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
        <Link onClick={() => handleDownload(document)} color="transparent">
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
