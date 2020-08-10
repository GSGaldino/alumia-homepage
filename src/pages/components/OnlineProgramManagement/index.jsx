import React from 'react';
import mobile from '../../../assets/mobile.jpg';

export default function OnlineProgramManagement(){
  return (
    <div className="OPM">
      <h1>OPM</h1>
      <p>ONLINE PROGRAM MANAGEMENT</p>
      <p>Construímos programas de educação a distância para a sua instituição, garantimos a melhor experiência para os estudantes e o sucesso da sua marca no mundo digital.</p>
      <img
        src={mobile}
        alt="Mobile"
        title="Mobile"
      />
    </div>
  )
}
