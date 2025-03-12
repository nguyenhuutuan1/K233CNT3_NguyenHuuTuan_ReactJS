import React, { useState } from "react";

const NhtProductAdd = ({ nhtOnAddProduct }) => {
    const [nhtNewProduct, setNhtNewProduct] = useState({
        nhtPid: "",
        nhtPName: "",
        nhtPQuantity: "",
        nhtPPrice: "",
    });

    const nhtHandleChange = (e) => {
        setNhtNewProduct({ ...nhtNewProduct, [e.target.name]: e.target.value });
    };

    const nhtHandleSubmit = (e) => {
        e.preventDefault();
        if (nhtNewProduct.nhtPName && nhtNewProduct.nhtPQuantity && nhtNewProduct.nhtPPrice) {
            nhtOnAddProduct({
                ...nhtNewProduct,
                nhtPid: Date.now(),
                nhtPQuantity: parseInt(nhtNewProduct.nhtPQuantity),
                nhtPPrice: parseFloat(nhtNewProduct.nhtPPrice),
            });
            setNhtNewProduct({ nhtPid: "", nhtPName: "", nhtPQuantity: "", nhtPPrice: "" });
        }
    };

    return (
        <div>
            <h2>Thêm sản phẩm mới</h2>
            <form onSubmit={nhtHandleSubmit}>
                <input
                    type="text"
                    name="nhtPName"
                    placeholder="Tên sản phẩm"
                    value={nhtNewProduct.nhtPName}
                    onChange={nhtHandleChange}
                    required
                />
                <input
                    type="number"
                    name="nhtPQuantity"
                    placeholder="Số lượng"
                    value={nhtNewProduct.nhtPQuantity}
                    onChange={nhtHandleChange}
                    required
                />
                <input
                    type="number"
                    name="nhtPPrice"
                    placeholder="Giá"
                    value={nhtNewProduct.nhtPPrice}
                    onChange={nhtHandleChange}
                    required
                />
                <button type="submit">Thêm sản phẩm</button>
            </form>
        </div>
    );
};

export default NhtProductAdd;