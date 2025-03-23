import React from 'react'
import DashboardComponent from '../molecule/DashboardPage/DashboardComponent'

export default function OrganismDashboard({ darkMode }) {
  return (
   <div style={{ padding: "20px 0 50px 0", height: "100vh",  backgroundColor: darkMode ? "#121212" : "#ffffff", }}>
     <DashboardComponent darkMode={darkMode}/>
   </div>
  )
}
