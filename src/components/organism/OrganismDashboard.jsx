import React from 'react'
import NavbarCustom from '../atom/Navbar'
import DashboardComponent from '../molecule/DashboardPage/DashboardComponent'

export default function OrganismDashboard() {
  return (
   <div style={{backgroundColor: '#F8FAFD'}}>
     <NavbarCustom/>
     <DashboardComponent/>
   </div>
  )
}
