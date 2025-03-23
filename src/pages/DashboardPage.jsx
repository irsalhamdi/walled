import React from 'react'
import OrganismDashboard from '../components/organism/OrganismDashboard'

export default function DashboardPage({ darkMode }) {
  console.log(darkMode, "darkMode")
  return <OrganismDashboard darkMode={darkMode}/>
  
}
