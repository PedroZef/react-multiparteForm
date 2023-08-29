import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { useEffect } from "react";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    if (etapaAtual === formularios.length-1) {
      aoEnviar(dadosColetados);
    }

  });

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="hs">Obrigado peloCadastro!</Typography>
  ];

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });

    proximo();
  }
  function proximo(dados) {
    setEtapaAtual(etapaAtual + 1);
  }
  return <>
  <Stepper activeStep={etapaAtual}>
    <Step><StepLabel>Login</StepLabel></Step>
    <Step><StepLabel>Pessoal</StepLabel></Step>
    <Step><StepLabel>Entrega</StepLabel></Step>
    <Step><StepLabel>Finalização</StepLabel></Step>
  </Stepper>
  {formularios[etapaAtual]}
  </>;
}

export default FormularioCadastro;
