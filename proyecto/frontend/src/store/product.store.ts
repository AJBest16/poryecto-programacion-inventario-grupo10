import { axiosClient } from "@/axios/axios.service";
import { create } from "zustand";

interface Product {
    id: string;
    name: string;
    description: string;
    unit: string;
    location: string;
    createAt?: Date;
    updateAt?: Date;
}

type Store = {
    product: Product | null;
    setProduct: (newProduct: Omit<Product, "id" | "createAt" | "updateAt">) => Promise<void>;
}

export const useProductStore = create<Store>()((set) => ({
    product: null,
    setProduct: async (newProduct) => {
        try {
            const { data } = await axiosClient.post<Product>('/product', newProduct);
            set({ product: data });
            console.log("Usuario creado:", data);
        } catch (e) {
            console.error("Error al crear el usuario:", e);
        }
    }
}));