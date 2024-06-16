import api, { openApi } from "../../services/api";
import { socketConnection } from "../../services/socket";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useAuth = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      api.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
    }

    setLoading(false);
  }, []);

  const handleLogin = async (userData) => {
    try {
      const response = await openApi.post('/login', userData);
      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      setToken(token);
      setUser(user);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      toast.success("Logado com sucesso!");
      navigate("/home");
    } catch (error) {
      toast.error("Erro ao fazer login!");
    }
  };

  const handleLogout = async () => {

    await api.delete("/logout");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);

    delete api.defaults.headers.common["Authorization"];

    navigate("/");

  };

  return {
    token,
    user,
    loading,
    handleLogin,
    handleLogout
  };
};

export default useAuth;
