import React from 'react';
import Topup from '../molecule/TopupPage';
import useDarkMode from '../../zustand/useDarkmode';

export default function OrganismTopup() {
  const {darkMode} = useDarkMode();
  return (
   <div style={{  minHeight: "100vh", display: "flex", alignItems: "center", backgroundColor: darkMode ? "#121212" : "#ffffff" }}>
    <Topup darkMode={darkMode}/>
   </div>
  )
}
