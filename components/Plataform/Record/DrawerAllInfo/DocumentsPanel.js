import { Tabs } from "@/components/Common/Tabs";
import { Tab } from "@/components/Common/Tabs/Tab";
import { StyledDocument, StyledPage } from "../styles";
import { Div, Text } from "@/styles/Common";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getFileType } from "@/utilities/helpers";
import { pdfjs } from "react-pdf";
import { theme } from "@/styles/theme";
import downloadIcon from "../../../../assets/icons/download-2.svg"

export const DocumentsPanel = ({
  bankStatementInfo,
  identificationInfo,
  handleDownload
}) => {
  const [numPages, setNumPages] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const [forceUpdate, setForceUpdate] = useState(false);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    setForceUpdate(!forceUpdate);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  }, []);

  const tabs = [
    { label: "Extracto bancario" },
    { label: "Documento de identidad" },
  ];

  const returnDocument = (name, urlDoc) => {
    return (
      <>
        <Div justify="space-between" align="center" m="24px 0 16px 0">
          <Text
            color={theme.colors.primary900}
            font={theme.fonts.family.primaryMedium}
            weight={theme.fonts.weight.medium}
            size={theme.fonts.size.default2}
            lineHeight={"24px"}
          >
            {name}
          </Text>
          <Image
            alt="download"
            src={downloadIcon}
            onClick={() => handleDownload(urlDoc, name)}
            style={{ cursor: "pointer" }}
          />
        </Div>
        {getFileType(urlDoc) === "pdf" ? (
          <StyledDocument
            file={urlDoc}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <StyledPage
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            ))}
          </StyledDocument>
        ) : (
          <Div
            m="16px 0 0 0"
            p="10px"
            width="100%"
            height="100%"
            justify="center"
          >
            <Image
              alt="bankStatement"
              src={urlDoc}
              width={682}
              height={909}
            />
          </Div>
        )}
      </>
    );
  };

  return (
    <>
      <Tabs
        value={selectedTab}
        background={theme.colors.orange}
        onChange={handleTabChange}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            color={theme.colors.neutralGray600}
            size={theme.fonts.size.sm}
          />
        ))}
      </Tabs>
      {selectedTab === 0 && (
        returnDocument(bankStatementInfo.bankStatementName, bankStatementInfo.bankStatementUrl)
      )}
      {selectedTab === 1 && (
        returnDocument(identificationInfo.identificationNameUrl, identificationInfo.identificationUrl)
      )}
    </>
  )
};