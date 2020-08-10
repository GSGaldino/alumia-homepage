import React from 'react';
import logo from '../../../assets/logo.jpg';

import './styles.css';

export default function Header(){
  return (
    <div className="Header">
      <img 
        src={logo}
        alt="Logo"
        title="Logo"
      />
    </div>
  )
}
