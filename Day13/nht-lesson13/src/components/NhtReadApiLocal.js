import React, { useState } from 'react'
import axios from 'axios'

export default function NhtReadApiLocal() {
    // khởi tạo state
    const [nhtListUser, setNhtListUser] = useState([])
    //đọc dữ liệu từ api local và set cho nhtListUser
    const apiUrl = "http://localhost:3001/users"
    // Lấy danh sách từ apiUrl
    useEffect(()=>{
        axios
            .get(apiUrl)
            .then((nhtResponse)=>{
                setNhtListUser(nhtResponse.data)
            })
            .catch((error)=>{
                console.log("Lỗi");
            })
    },[])
  return (
    <div>
        <h2>Đoc dữ liệu từ API Local</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    nhtlistUser.map((nhtItem, index)=>{
                        return (
                            <tr>
                                <td>{nhtItem.fullName}</td>
                                <td>{nhtItem.age}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
