import React from "react";
import Header from './components/Header';
import OnlineProgramManagement from './components/OnlineProgramManagement';
import CTA from './components/CTA';
import TradicaoETecnologia from './components/TradicaoETecnologia';
import MetodologiaPremiada from './components/MetodologiaPremiada';
import SejaParceiro from './components/SejaParceiro';

import './reset.css';

export default function Home() {
  return (
    <>
      <div className="Home">
        <Header />
        <OnlineProgramManagement />
        <CTA />
        <TradicaoETecnologia />
        <MetodologiaPremiada />
        <SejaParceiro />
      </div>
    </>
  )
}
