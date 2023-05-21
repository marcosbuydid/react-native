import React, { createContext, useEffect, useState } from "react";
import { Producto, ProductsResponse, Categoria } from '../interfaces/AppInterface';
import productApi from "../api/ProductApi";
import { ImagePickerResponse } from "react-native-image-picker";

type ProductsContextProps = {
    products: Producto[];
    loadProducts: () => Promise<void>;
    addProduct: (categoryId: string, productName: string) => Promise<void>;
    updateProduct: (categoryId: string, productName: string, productId: string) => Promise<void>;
    deleteProduct: (id: string) => Promise<void>;
    loadProductById: (id: string) => Promise<Producto>;
    uploadImage: (data: ImagePickerResponse, id: string) => Promise<void>;
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

    const uploadImage = async (data: ImagePickerResponse, id: string) => {

        const file = {
            uri: data?.assets && data.assets[0].uri,
            type: data?.assets && data.assets[0].type,
            name: data?.assets && data.assets[0].fileName
        }
        const formData = new FormData();

        //archivo is the key property that backend needs for upload the image
        formData.append('archivo', file)
        try {
            const response = await productApi.put(`/uploads/productos/${id}`, formData)
        }
        catch (error) {
        }
    };

    const deleteProduct = async (id: string) => { };

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