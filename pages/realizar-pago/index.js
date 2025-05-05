import React, { useEffect, useState } from "react";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { Div, Text } from "@/styles/Common";
import { theme } from "@/styles/theme";
import { CardPayment, Divider, WrapperPayment } from "@/styles/Transaction";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import { TextField } from "@/components/Common/TextField";
import masterCard from "@/assets/icons/mastercard.svg";
import visa from "@/assets/icons/visa.svg";
import Image from "next/image";
import { encrypt, numberFormat } from "@/utilities/helpers";
import { Button } from "@/components/Common/Button";
import { useDispatch, useSelector } from "react-redux";
import useCardPayment from "@/hooks/WompiPayment/useCardPayment";
import useCreatePetInsurance from "@/hooks/Pets/useCreatePetInsurance";
import { CircularProgress } from "@/components/Common/CircularProgress";
import toast from "react-hot-toast";
import { setPetsFormInfo } from "@/store/pets";
import useGetStatusTransaction from "@/hooks/WompiPayment/useGetStatusTransaction";
import { CustomErrorToast } from "@/components/Common/CustomErrorToast";
import { setPaymentInformation } from "@/store/payment";
import useCreateInsurance from "@/hooks/Med/useCreateInsurance";
import { setMedFormInfo } from "@/store/med";

const RealizarPago = ({ isMobile }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { payAssistance } = router.query;
  const createInsurance = useCreateInsurance();
  const createPetInsurance = useCreatePetInsurance();
  const cardPayment = useCardPayment();
  const { petsForm } = useSelector((state) => state.pets);
  const { medForm } = useSelector((state) => state.med);
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [summary, setSummary] = useState([]);
  const [loading, setLoading] = useState(false);
  const [transactionId, setTransactionId] = useState(null);
  const [transactionReference, setTransactionReference] = useState(null);
  const { data: statusTransaction, isSuccess: isSuccessStatusTransaction } = useGetStatusTransaction(transactionReference);
  const [transactionStatus, setTransactionStatus] = useState("");
  const [cardPaymentForm, setCardPaymentForm] = useState({
    email: "",
    name: "",
    petApplicationId: 0,
    cardNumber: "",
    expiredDate: "",
    cardHolder: "",
    cvc: "",
    amount: 0,
    typeApplication: ""
  });

  const petAssistance = payAssistance === "pet";
  const medAssistance = payAssistance === "med";

  const inputProps = {
    labelColor: theme.colors.gray1000,
    labelFont: theme.fonts.family.primary,
    labelSize: theme.fonts.size.default2,
    border: theme.colors.gray1100,
    radius: "20px",
    height: "40px",
    width: "100%",
    font: theme.fonts.family.primary,
    size: theme.fonts.size.default2,
    fontColor: theme.colors.gray150,
  };

  const buttonProps = {
    background: theme.colors.orange1000,
    labelColor: theme.colors.white,
    font: theme.fonts.family.primary,
    size: theme.fonts.size.h6,
    border: theme.colors.orange1000,
    hover: theme.colors.orange1000,
    borderHover: theme.colors.orange1000,
    height: "40px",
    borderRadius: "50px"
  };

  const returnIcon = () => {
    return (
      <Div gap="12px">
        <Image src={visa} alt="visa" />
        <Image src={masterCard} alt="mastercard" />
      </Div>
    )
  };

  useEffect(() => {
    if (isSuccessStatusTransaction) {
      setTransactionStatus(statusTransaction?.data?.result);
      setLoading(false);

      if (statusTransaction?.data?.result === "APPROVED" || statusTransaction?.data?.result === "DECLINED") {
        setTimeout(() => {
          router.push(`/transaccion?payAssistance=${payAssistance}`);
          dispatch(setPaymentInformation({
            idNumber: transactionId,
            transactionDate: new Date(),
            status: statusTransaction?.data?.result,
            receptor: "Building Life Technologies SAS",
            paymentAmount: cardPaymentForm.amount,
            payment: "Tarjeta terminada en " + cardPaymentForm.cardNumber.slice(-4),
          }));
        }, 100);
      };
    }
  }, [isSuccessStatusTransaction, statusTransaction]);

  useEffect(() => {
    if (transactionStatus === "VOIDED" || transactionStatus === "ERROR") {
      toast.custom(
        <CustomErrorToast
          message={"Ha ocurrido un error con el método de pago. Por favor inténtalo nuevamente"}
        />,
        { duration: 1000 }
      )
      setTransactionReference(null);
      setTransactionId(null);
      setTransactionStatus("");
    };
  }, [transactionStatus]);

  useEffect(() => {
    if (petAssistance) {
      setBreadcrumbs([
        {
          label: "Bangk",
          href: "/",
          type: "link"
        },
        {
          label: "PetBangk",
          href: "/pet-bangk",
          type: "link"
        },
        {
          label: "Info PetBangk",
          href: "/pet-bangk/info-petbangk",
          type: "link",
        },
        {
          label: "Adquiere asistencia",
          href: "/pet-bangk/asegura-ya",
          type: "link"
        },
        {
          label: "Pago de asistencia",
          type: "text"
        }
      ]);
    } else {
      setBreadcrumbs([
        {
          label: "Bangk",
          href: "/",
          type: "link",
        },
        {
          label: "Seguros",
          href: "/ahorra-en-tus-seguros",
          type: "link",
        },
        {
          label: "MedBangk",
          href: "/ahorra-en-tus-seguros/med-bangk",
          type: "link",
        },
        {
          label: "Adquiere asistencia",
          type: "link",
          href: "/ahorra-en-tus-seguros/med-bangk/contrata",
        },
        {
          label: "Pago de asistencia",
          type: "text"
        }
      ]);
    }
  }, [petAssistance]);

  useEffect(() => {
    if (petAssistance && petsForm?.pets?.length > 0) {
      setSummary([
        {
          label: "Total mascotas",
          value: petsForm.pets.length + " mascotas"
        },
        {
          label: "Subtotal",
          value: "$ " + numberFormat(petsForm.amount)
        },
      ]);
      setCardPaymentForm({
        ...cardPaymentForm,
        name: petsForm.name,
        email: petsForm.email,
        amount: petsForm.amount,
      });
    };
  }, [petAssistance, petsForm, cardPaymentForm]);

  useEffect(() => {
    if (medAssistance && medForm?.beneficiaryInsurance?.length > 0) {
      setSummary([
        {
          label: "Total beneficiarios",
          value: medForm.beneficiaryInsurance.length === 1 
            ? "1 beneficiario" 
            : medForm.beneficiaryInsurance.length + " beneficiarios"
        },
        {
          label: "Valor individual",
          value: "$ " + numberFormat(medForm?.amount / medForm?.beneficiaryInsurance?.length)
        },
        {
          label: "Subtotal",
          value: "$ " + numberFormat(medForm.amount)
        },
      ]);
      setCardPaymentForm({
        ...cardPaymentForm,
        name: medForm.name,
        email: medForm.email,
        amount: medForm.amount,
      });
    }
  }, [medAssistance, medForm, cardPaymentForm]);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    const formattedValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    setCardPaymentForm({ ...cardPaymentForm, [id]: formattedValue });
  };

  const handleChangeExpiredDate = (e) => {
    const { value } = e.target;
    const formattedValue = value.replace(/\D/g, '');
    const month = formattedValue.slice(0, 2);
    const year = formattedValue.slice(2, 4);
    setCardPaymentForm({ ...cardPaymentForm, expiredDate: month + (month && year ? '/' : '') + year });
  };

  const handleChangeNumber = (e) => {
    const { value, id } = e.target;
    const formattedValue = value.replace(/\D/g, '');
    setCardPaymentForm({ ...cardPaymentForm, [id]: formattedValue });
  };

  const isValidButton = () => {
    return cardPaymentForm.cardHolder && cardPaymentForm.cardNumber && cardPaymentForm.expiredDate && cardPaymentForm.cvc;
  };

  const handlePayPets = () => {
    setLoading(true);
    const petPayload = { 
      ...petsForm, 
      pets: petsForm.pets.map((pet) => ({ 
        petTypeId: pet.petTypeId,
        breed: pet.breed,
        name: pet.name,
        color: pet.color,
        age: pet.ageTime === "Años" ? pet.age * 12 : pet.age 
      })) 
    };
    delete petPayload.amount;

    createPetInsurance.reset();
    createPetInsurance.mutate(petPayload, {
      onSuccess: (res) => {
        const applicationId = res?.data?.clientInsuredId;
        const cardPayload = {
          email: cardPaymentForm.email,
          name: cardPaymentForm.name,
          applicationId: applicationId,
          cardNumber: encrypt(cardPaymentForm.cardNumber),
          expiredMonth: encrypt(cardPaymentForm.expiredDate.slice(0, 2)),
          expiredYear: encrypt(cardPaymentForm.expiredDate.slice(3, 5)),
          cardHolder: encrypt(cardPaymentForm.cardHolder),
          paymentInstallments: 1,
          cvc: encrypt(cardPaymentForm.cvc),
          amount: cardPaymentForm.amount,
          typeApplication: "PET",
        };

        cardPayment.reset();
        cardPayment.mutate(cardPayload, {
          onSuccess: (res) => {
            setTransactionReference(res?.data?.result?.transactionReference);
            setTransactionId(res?.data?.result?.transactionId);
            dispatch(setPetsFormInfo({}));
          },
          onError: () => {
            console.log("Error");
            setLoading(false);
          }
        });
      },
      onError: () => {
        toast.error("Ha ocurrido un error, por favor intente nuevamente");
        setLoading(false);
      }
    });
  };

  const handlePay = () => {
    setLoading(true);
    const medPayload = { ...medForm };
    delete medPayload.amount;

    createInsurance.reset();
    createInsurance.mutate(medPayload, {
      onSuccess: (res) => {
        const applicationId = res?.data?.medEnsuranceApplicationId;
        const cardPayload = {
          email: cardPaymentForm.email,
          name: cardPaymentForm.name,
          applicationId: applicationId,
          cardNumber: encrypt(cardPaymentForm.cardNumber),
          expiredMonth: encrypt(cardPaymentForm.expiredDate.slice(0, 2)),
          expiredYear: encrypt(cardPaymentForm.expiredDate.slice(3, 5)),
          cardHolder: encrypt(cardPaymentForm.cardHolder),
          paymentInstallments: 1,
          cvc: encrypt(cardPaymentForm.cvc),
          amount: cardPaymentForm.amount,
          typeApplication: "MED",
        };

        cardPayment.reset();
        cardPayment.mutate(cardPayload, {
          onSuccess: (res) => {
            setTransactionReference(res?.data?.result?.transactionReference);
            setTransactionId(res?.data?.result?.transactionId);
            dispatch(setMedFormInfo({}));
          },
          onError: () => {
            console.log("Error");
            setLoading(false);
          }
        });
      },
      onError: () => {
        toast.error("Ha ocurrido un error, por favor intente nuevamente");
        setLoading(false);
      }
    });
  };

  return (
    <>
      <Breadcrumbs items={breadcrumbs} isMobile={isMobile} />
      {loading && (
        <Div
          direction="column"
          gap="10px"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <CircularProgress lineColor={theme.colors.white} />
          <Text
            font={theme.fonts.family.primaryMedium}
            color={theme.colors.white}
            size={isMobile ? theme.fonts.size.default2 : theme.fonts.size.h6}
          >
            Este proceso puede tardar unos minutos, por favor no cierres esta ventana...
          </Text>
        </Div>
      )}
      <WrapperPayment>
        <Text
          size={isMobile ? theme.fonts.size.h3 : theme.fonts.size.h2}
          font={theme.fonts.family.primaryBold}
          color={petAssistance ? theme.colors.blue200 : theme.colors.green1000}
        >
          Detalle de tu pago
        </Text>
        <Div direction={isMobile ? "column" : "row"} width="100%" gap={"20px"}>
          <Div width={isMobile ? "100%" : "70%"}>
            <CardPayment>
              <Text 
                color={theme.colors.gray150} 
                size={theme.fonts.size.h6} 
                font={theme.fonts.family.primaryMedium}
                mb="40px"
              >
                Por favor completa los datos de tu tarjeta para continuar:
              </Text>
              <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                  <TextField
                    {...inputProps}
                    id="cardHolder"
                    label="Nombre que aparece en la tarjeta"
                    placeholder="Ej: Jhon Smith"
                    value={cardPaymentForm.cardHolder}
                    onChange={handleChange}
                    inputProps={{
                      maxLength: 50
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    {...inputProps}
                    id="cardNumber"
                    label="Número de tarjeta"
                    placeholder="Ej: 567909090 - XX"
                    suffix={returnIcon()}
                    value={cardPaymentForm.cardNumber}
                    onChange={handleChangeNumber}
                    inputProps={{
                      maxLength: 20
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    {...inputProps}
                    id="expiredDate"
                    label="Fecha de expiración"
                    placeholder="Ej: 12/32"
                    value={cardPaymentForm.expiredDate}
                    onChange={handleChangeExpiredDate}
                    inputProps={{
                      maxLength: 5
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    {...inputProps}
                    id="cvc"
                    label="Código de seguridad"
                    placeholder="xxx"
                    value={cardPaymentForm.cvc}
                    onChange={handleChangeNumber}
                    inputProps={{
                      maxLength: 4
                    }}
                  />
                </Grid>
              </Grid>
            </CardPayment>
          </Div>
          <Div width={isMobile ? "100%" : "30%"}>
            <CardPayment style={{ padding: "37px 29px 30px 29px" }}>
              <Text
                size={theme.fonts.size.h6}
                font={theme.fonts.family.primaryMedium}
                color={theme.colors.gray150}
                mb="30px"
              >
                Resumen del pago
              </Text>
              {summary.map((ele, indx) => (
                <Div key={indx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <Text 
                    color={theme.colors.gray150}
                    font={theme.fonts.family.primaryMedium}
                    size={theme.fonts.size.default2}
                  >
                    {ele.label}
                  </Text>
                  <Text 
                    color={theme.colors.gray150}
                    size={theme.fonts.size.default2}
                  >
                    {ele.value}
                  </Text>
                </Div>
              ))}
              <Divider />
              <Div direction="row" justifyContent="space-between">
                <Div>
                  <Text
                    color={theme.colors.gray150}
                    font={theme.fonts.family.primaryMedium}
                    size={theme.fonts.size.h6}
                  >
                    Total a pagar
                  </Text>
                </Div>
                <Div>
                  <Text
                    color={theme.colors.gray150}
                    size={theme.fonts.size.h6}
                  >
                    $ {numberFormat(cardPaymentForm.amount)}
                  </Text>
                </Div>
              </Div>
              <Div height="100%" align="flex-end">
                <Button 
                  {...buttonProps} 
                  disabled={!isValidButton()}
                  onClick={petAssistance ? handlePayPets : handlePay}
                >
                  Realizar pago
                </Button>
              </Div>
            </CardPayment>
          </Div>
        </Div>
      </WrapperPayment>
    </>

  );
};

export default RealizarPago;
