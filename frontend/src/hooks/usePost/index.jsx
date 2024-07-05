import api from "../../services/api";
import { toast } from "react-toastify";

const usePost = () => {
  const create = async (formData) => {
    try {
      const response = await api.post("/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      toast.error("Erro ao postar!");
      throw error;
    }
  };

  const list = async (page = 1 , limit = 7) => {
    try {
      const response = await api.get(`/posts?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      toast.error("Erro ao carregar posts!");
      throw error;
    }
  };

  return { create, list };
};

export default usePost;
