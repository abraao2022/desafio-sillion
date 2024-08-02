// import { Topic } from "@/types/Topic";
import { User } from "@/Types/Users";
import api from "../api";

export const getUsers = async (per_page: number): Promise<User[]> => {
    try {
        const response = await api.get<User[]>(`users?per_page=${per_page || 15}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao obter usuários", error);
        throw error;
    }
};

export const getUserById = async (id: string): Promise<User> => {
    try {
        const response = await api.get<User>(`user/${id}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao obter o usuário", error);
        throw error;
    }
};
