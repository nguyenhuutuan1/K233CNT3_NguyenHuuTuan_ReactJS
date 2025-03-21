import React from 'react'

export default function NhtJsxExpression() {
    // biến
    const name="Nguyễn Hữu Tuấn";
    // biến đối tượng
    const user ={
        firstName:"Tuấn",
        lastName:"Nguyễn"
    }
    // hàm
    const fullName=(user)=>{
        return user.firstName + ' ' + user.lastName 
    }

    //element
    const element =(
        <div>
            {/*Biểu thức jsx */}
            <h2> {fullName(user)} </h2>
            <hr/>
            <h3> Wellcome to, {name}</h3>
        </div>
    );

    //Ham
    const sayWellcome =  (name)=>{
        if(name){
            return <h3>Wellcome to {name}</h3>
        }else{
            return <h3>Wellcome to Fit-NTU - K23CNT3</h3>

        }
    }
  return (
    <div>
        <h1> NHT -JSX Expression</h1>
        {/* sử dụng biến element */}
        {element}

        <hr/>
        {sayWellcome()}
        <hr/>
        {sayWellcome("Trịnh Văn Trung")}
    </div>
  )
}
