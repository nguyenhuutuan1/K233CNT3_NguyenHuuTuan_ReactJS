import React from "react";

const NhtProductList = ({ nhtProducts }) => {
    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Giá</th>
                    </tr>
                </thead>
                <tbody>
                    {nhtProducts.map((product) => (
                        <tr key={product.nhtPid}>
                            <td>{product.nhtPid}</td>
                            <td>{product.nhtPName}</td>
                            <td>{product.nhtPQuantity}</td>
                            <td>{product.nhtPPrice} VND</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NhtProductList;