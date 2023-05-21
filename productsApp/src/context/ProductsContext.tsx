import React, { createContext, useEffect, useState } from "react";
import { Producto, ProductsResponse, Categoria } from '../interfaces/AppInterface';
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

    const loadProductById = async (id: string): Promise<Producto> => {
        const response = await productApi.get<Producto>(`/productos/${id}`);
        return response.data;
    };

    const addProduct = async (categoryId: string, productName: string) => {
        const response = await productApi.post<Producto>('/productos', {
            nombre: productName,
            categoria: categoryId
        });
        setProducts([...products, response.data])
    };

    const updateProduct = async (categoryId: string, productName: string, productId: string) => {
        const response = await productApi.put<Producto>(`/productos/${productId}`, {
            nombre: productName,
            categoria: categoryId
        });
        setProducts(products.map(product => {
            return (product._id === productId) ? response.data : product
        }))
    };

    const deleteProduct = async (id: string) => { };
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