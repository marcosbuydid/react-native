import { useEffect, useState } from "react"
import productApi from "../api/ProductApi";
import { Categoria, CategoriesResponse } from "../interfaces/AppInterface";

export const useCategories = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [categories, setCategories] = useState<Categoria[]>([]);

    useEffect(() => {
        getCategories();
    }, [])

    const getCategories = async () => {
        const response = await productApi.get<CategoriesResponse>('/categorias');
        setCategories(response.data.categorias);
        setIsLoading(false);
    }

    return {
        isLoading,
        categories
    }
}
