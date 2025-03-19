import React, { useState } from 'react'

export default function NhtFormUser({onNhtAddNew}) {

  const [id, setNhtId] = useState ('')
  const [nhtFullName, setNhtFullName] = useState ('')
  const [nhtUserName, setNhtUserName] = useState ('')
  const [nhtPass, setNhtPass] = useState ('')



  const nhtHandleSubmit = (event) =>{
    event.preventDefault();
    console.log(id,nhtFullName,nhtUserName, nhtPass)
    
    onNhtAddNew({id,nhtFullName,nhtUserName, nhtPass})
  }
  return (
    <div>
        <form>
            <p>
                Mã sinh viên:
                 <input type='text' name='id' value={id} onChange={(ev)=>setNhtId(ev.target.value)} />
            </p>
            <p>
                Họ và tên:
                 <input type='text' name='nhtFullName' value={nhtFullName} onChange={(ev)=>setNhtFullName(ev.target.value)} />
            </p>
            <p>
                Tài khoản:
                 <input type='text' name='nhtUserName' value={nhtUserName} onChange={(ev)=>setNhtUserName(ev.target.value)} />
            </p>
            <p>
                Mật khẩu:
                 <input type='password' name='nhtPass' value={nhtPass} onChange={(ev)=>setNhtPass (ev.target.value)} />
            </p>
            
            <p>
              <button name='nhtSave' onClick={nhtHandleSubmit}>Save</button>
            </p>
        </form>
    </div>
  )
}
