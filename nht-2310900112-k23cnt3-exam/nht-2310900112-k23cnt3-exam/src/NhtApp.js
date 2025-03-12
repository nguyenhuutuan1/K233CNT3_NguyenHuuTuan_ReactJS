import React, { useState } from "react";
import NhtProductList from "./components/NhtProductList";
import NhtProductAdd from "./components/NhtProductAdd";

const NhtApp = () => {
    const nhtProducts = [
        { nhtPid: 2310900112, nhtPName: "Nguyễn Hữu Tuấn", nhtPQuantity: "Mã SV", nhtPPrice: "Sinh viên" },
        { nhtPid: 1, nhtPName: "San pham A", nhtPQuantity: 10, nhtPPrice: 10000 },
        { nhtPid: 2, nhtPName: "San pham B", nhtPQuantity: 5, nhtPPrice: 15000 },
        { nhtPid: 3, nhtPName: "San pham C", nhtPQuantity: 8, nhtPPrice: 20000 },
      ];

    const nhtAddProduct = (newProduct) => {
        setNhtProducts([...nhtProducts, newProduct]);
    };

    return (
        <div>
            <h1>Quản lý sản phẩm</h1>
            <NhtProductAdd nhtOnAddProduct={nhtAddProduct} />
            <NhtProductList nhtProducts={nhtProducts} />
        </div>
    );
};

export default NhtApp;