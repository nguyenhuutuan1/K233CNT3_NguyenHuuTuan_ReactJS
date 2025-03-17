import React, { useState } from 'react'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NhtNavNar from './components/NhtNavNar'
import NhtHome from './components/NhtHome'
import NhtAbout from './components/NhtAbout'
import NhtContact from './components/NhtContact'
import NhtListUser from './components/NhtListUser'
export default function NhtApp() {

  const ListUsers = [
    {id:"SV001", nhtFullName:"Nguyễn Hữu Tuấn", nhtUserName:"Hữu Tuấn", nhtPass:"123456@"},
    {id:"SV002", nhtFullName:"Nguyễn Văn Minh", nhtUserName:"Văn Minh", nhtPass:"123456@"},
    {id:"SV003", nhtFullName:"Đỗ Hiền Nam", nhtUserName:"Hiền Nam", nhtPass:"123456@"},
  ]

  const[nhtUsers, setNhtUsers] =useState(ListUsers)
  return (
    <div className='container border my-3'>
      <h1>React Router Dom - Demo - [Nguyễn Hữu Tuấn - K23CNT3]</h1>
      <hr/>
      <Router>
        <NhtNavNar />
        <Routes>
          <Route path='/' element = {<NhtHome/>} /> 
          <Route path='/about' element = {<NhtAbout/>} /> 
          <Route path='/contact' element = {<NhtContact/>} /> 
          <Route path='/list-user' element = {<NhtListUser renderNhtUsers={nhtUsers}/>} /> 
        </Routes>

      </Router>
    </div>
  )
}
