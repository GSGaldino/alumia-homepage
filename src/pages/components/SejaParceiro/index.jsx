import React from 'react';
import sejaParceiro from  '../../../assets/seja-parceiro.png';


export default function SejaParceiro(){
  return (
    <div className="SejaParceiro">
      <a href="/">Seja um parceiro Alumia!</a>
      <img
        src={sejaParceiro}
        title="Seja Parceiro"
        alt="Seja Parceiro"
      />
    </div>
  )
}
