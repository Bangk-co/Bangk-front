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
import useRejectLoanQuote from "@/hooks/ViewQuote/useRejectLoanQuote";
import { Calculation } from "@/components/ViewQuote/Calculation";
import Banner from "@/components/ViewQuote/Banner";
import { ModalTerms } from "@/components/Common/ModalTerms";
import { ModalAccept } from "@/components/ViewQuote/ModalAccept";
import { ModalDecline } from "@/components/ViewQuote/ModalDecline";

const ViewQuote = ({ isMobile, isTablet }) => {
  const router = useRouter();
  const { requests } = useSelector((state) => state);

  const acceptLoanQuote = useAcceptLoanQuote();
  const rejectLoanQuote = useRejectLoanQuote();

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
  const [openModalDecline, setOpenModalDecline] = useState(false);
  const [isRejecting, setisRejecting] = useState(false);
  const [reasonToReject, setReasonToReject] = useState("");

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
    setOpenModalDecline(false);
    setisRejecting(false);
    setReasonToReject("");
  };
  const handleAcceptTerms = () => {
    setOpenModalTerms(false);
    setTerms(true);
  };
  const handleDecline = () => {
    setOpenModalAccept(false);
    setOpenModalDecline(true);
  };
  const handleRadio = (event) => {
    const { value } = event.target;

    setReasonToReject(value);
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

  const handleReject = () => {
    rejectLoanQuote.reset();
    rejectLoanQuote.mutate(
      {
        loanApplicationId: requests?.selectedRequest,
        observations: reasonToReject,
      },
      {
        onSuccess: () => {
          setOpenModalDecline(false);
          router.push("/ver-cotizacion/cotizacion-rechazada");
        },
        onError: (err) => {
          err.response.data.map((error) => {
            toast.error(error);
          });
        },
      }
    );
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
      <Modal open={openModalDecline}>
        <ModalDecline
          isMobile={isMobile}
          handleClose={handleClose}
          handleReject={handleReject}
          isLoading={rejectLoanQuote.isLoading}
          isRejecting={isRejecting}
          setisRejecting={setisRejecting}
          handleRadio={handleRadio}
          reasonToReject={reasonToReject}
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
            handleDecline={handleDecline}
            loanApplicationInfo={loanApplicationInfo}
          />
        </Div>
      </WrapperQuote>
    </Container>
  );
};

export default ViewQuote;
