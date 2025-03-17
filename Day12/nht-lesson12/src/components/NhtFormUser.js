import React from 'react'

export default function NhtFormUser() {
  return (
    <div>
        <form>
            <p>
                Mã sinh viên:
                 <input type='text' />
            </p>
            <p>
                Họ và tên:
                 <input type='text' />
            </p>
            <p>
                Tài khoản:
                 <input type='text' />
            </p>
            <p>
                Mật khẩu:
                 <input type='password' />
            </p>
            
            <p>
              <button name='nhtSave'>Save</button>
            </p>
        </form>
    </div>
  )
}
