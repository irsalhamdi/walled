import React from 'react';
import Transfer from '../molecule/TransferPage';
import useDarkMode from '../../zustand/useDarkmode';

export default function OrganismTransfer() {
  const { darkMode } = useDarkMode();
  return (
    <div style={{  minHeight: "100vh", display: "flex", alignItems: "center", backgroundColor: darkMode ? "#121212" : "#ffffff" }} >
    <Transfer darkMode={darkMode}/>
    </div>
  )
}
