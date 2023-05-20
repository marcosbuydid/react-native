import React, { createContext, useEffect, useState } from "react";
import { Producto, ProductsResponse } from "../interfaces/AppInterface";
import productApi from "../api/ProductApi";

type ProductsContextProps = {
    products: Producto[];
    loadProducts: () => Promise<void>;
    addProduct: (categoryId: string, productName: string) => Promise<void>;
    updateProduct: (categoryId: string, productName: string, productId: string) => Promise<void>;
    deleteProduct: (id: string) => Promise<void>;
    loadProductById: (id: string) => Promise<Producto>;
    uploadImage: (data: any, id: string) => Promise<void>;
}

export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductProvider = ({ children }: any) => {

    //this part can be made also with a reducer
    const [products, setProducts] = useState<Producto[]>([]);

    useEffect(() => {
        loadProducts();
    }, [])

    const loadProducts = async () => {
        const response = await productApi.get<ProductsResponse>('/productos?limite=50');
        setProducts([...response.data.productos]);
    };

    const addProduct = async (categoryId: string, productName: string) => { };
    const updateProduct = async (categoryId: string, productName: string, productId: string) => { };
    const deleteProduct = async (id: string) => { };
    const loadProductById = async (id: string) => { throw new Error('not implemented') };
    const uploadImage = async (data: any, id: string) => { };

    return (
        <ProductsContext.Provider value={{
            products,
            loadProducts,
            addProduct,
            updateProduct,
            deleteProduct,
            loadProductById,
            uploadImage
        }}>
            {children}
        </ProductsContext.Provider>
    )
}