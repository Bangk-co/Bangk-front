import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Div } from "@/styles/Common";
import { Modal } from "@mui/material";
import { Container, WrapperQuote } from "@/components/ViewQuote/styles";
import { useRouter } from "next/router";
import { wappLink } from "@/utilities/options";
import { useSelector } from "react-redux";
import useGetLoanQuoteByApplicationId from "@/hooks/ViewQuote/useGetLoanQuoteByApplicationId";
import useAcceptLoanQuote from "@/hooks/ViewQuote/useAcceptLoanQuote";
import { Calculation } from "@/components/ViewQuote/Calculation";
import Banner from "@/components/ViewQuote/Banner";
import { ModalTerms } from "@/components/Common/ModalTerms";
import { ModalAccept } from "@/components/ViewQuote/ModalAccept";

const ViewQuote = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const { requests } = useSelector((state) => state);

  const acceptLoanQuote = useAcceptLoanQuote();

  const loanApplications = useGetLoanQuoteByApplicationId(
    requests?.selectedRequest
  );
  const { data: dataLoanApplication, isLoading } = loanApplications;
  const [loanApplicationInfo, setLoanApplicationInfo] = useState();
  useEffect(() => {
    if (dataLoanApplication && dataLoanApplication.data) {
      setLoanApplicationInfo(dataLoanApplication?.data);
    }
  }, [dataLoanApplication, isLoading]);

  const [terms, setTerms] = useState(false);
  const [openModalTerms, setOpenModalTerms] = useState(false);
  const [openModalAccept, setOpenModalAccept] = useState(false);

  const handleWapp = () => {
    const a = document.createElement("a");
    a.href = `${wappLink}`;
    document.body.appendChild(a);
    a.target = "_blank";
    a.click();
  };

  const handleNext = () => {
    setOpenModalAccept(true);
  };

  const handleTerms = (event) => {
    const { checked } = event.target;

    setTerms(checked);
  };
  const handleClose = () => {
    setOpenModalTerms(false);
    setOpenModalAccept(false);
  };
  const handleAcceptTerms = () => {
    setOpenModalTerms(false);
    setTerms(true);
  };

  const handleAccept = () => {
    acceptLoanQuote.reset();
    acceptLoanQuote.mutate(requests?.selectedRequest, {
      onSuccess: () => {
        setOpenModalAccept(false);
        router.push("/ver-cotizacion/aceptacion-exitosa");
      },
      onError: (err) => {
        err.response.data.map((error) => {
          toast.error(error);
        });
      },
    });
  };

  return (
    <Container>
      <Modal open={openModalTerms}>
        <ModalTerms
          isMobile={isMobile}
          handleClose={handleClose}
          handleAccept={handleAcceptTerms}
          termsType="T&C"
        />
      </Modal>
      <Modal open={openModalAccept}>
        <ModalAccept
          isMobile={isMobile}
          handleClose={handleClose}
          handleAccept={handleAccept}
          isLoading={acceptLoanQuote.isLoading}
        />
      </Modal>
      <WrapperQuote isMobile={isMobile}>
        <Div justify={isMobile && "center"} height="100%">
          {!isMobile && !isTablet && <Banner />}

          <Calculation
            isMobile={isMobile}
            handleWapp={handleWapp}
            handleNext={handleNext}
            setOpenModal={setOpenModalTerms}
            terms={terms}
            handleTerms={handleTerms}
            loanApplicationInfo={loanApplicationInfo}
          />
        </Div>
      </WrapperQuote>
    </Container>
  );
};

export default ViewQuote;
