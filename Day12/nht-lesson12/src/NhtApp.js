import React, { useState } from 'react'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NhtNavNar from './components/NhtNavNar'
import NhtHome from './components/NhtHome'
import NhtAbout from './components/NhtAbout'
import NhtContact from './components/NhtContact'
import NhtListUser from './components/NhtListUser'
import NhtFormUser from './components/NhtFormUser'
import './App.css';
export default function NhtApp() {

  const ListUsers = [
    {id:"SV001", nhtFullName:"Nguyễn Hữu Tuấn", nhtUserName:"Hữu Tuấn", nhtPass:"123456@"},
    {id:"SV002", nhtFullName:"Nguyễn Văn Minh", nhtUserName:"Văn Minh", nhtPass:"123456@"},
    {id:"SV003", nhtFullName:"Đỗ Hiền Nam", nhtUserName:"Hiền Nam", nhtPass:"123456@"},
  ]

  const[nhtUsers, setNhtUsers] =useState(ListUsers)
  
  //Hàm xử lý sự kiện thêm mới
  const nhtHandleAdd = (nhtParam)=>{
    console.log("nhtHandleAdd", nhtParam);

    setNhtUsers(prev =>{ 
      return [
      ...prev,
      nhtParam
    ]
  })
  }
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
          <Route path='/create-user' element = {<NhtFormUser onNhtAddNew={nhtHandleAdd} />} /> 
        </Routes>

      </Router>
    </div>
  )
}
