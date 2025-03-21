import React from 'react'
import NhtJsxExpression from './components/NhtJsxExpression'
import NhtFuncComp from './components/NhtFuncComp'
import NhtClassComp from './components/NhtClassComp'

export default function NhtApp() {
  return (
    <div className='container border my-3 bg-white'>
        <h1>React JS Lesson03 - Nguyen Huu Tuan</h1>
        <hr></hr>

        <NhtJsxExpression/>

        <hr/>
        {/* Sử dụng function components */}
        <NhtFuncComp/>

        {/* sử dụng class components */}
        <NhtClassComp/>
    </div>
  )
}
