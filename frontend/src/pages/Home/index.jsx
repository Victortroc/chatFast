import { useEffect, useRef, useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import { toast } from "react-toastify";
import { socketConnection } from "../../services/socket";

export function Home() {
  
  const { handleLogout } = useContext(AuthContext);

  const socketRef = useRef(null);
  const storedUser = localStorage.getItem("user");

  useEffect(() => {
  
    if (storedUser) {
      const user = JSON.parse(storedUser);

      if (!socketRef.current) {
        socketRef.current = socketConnection(user);
        console.log("Socket connected");

        socketRef.current.on(`user-${user.id}-auth`, (data) => {
          if (data.action === "update" && data.user.id === user.id) {
            console.log("Received user update:", data.user);
          }
          if (data.user.id === user.id) {
            alert('Sua conta foi acessada em outro computador.');
            localStorage.clear();
            window.location.reload();
          }
        });
      }

      return () => {
        if (socketRef.current) {
          socketRef.current.disconnect();
          console.log("Socket disconnected");
          socketRef.current = null;
        }
      };
    }
  
  }, []);


  const handleButtonClick = async (e) => {
    e.preventDefault();

    try {
      await handleLogout();
      toast.info("Usuário deslogado!");
    } catch (error) {
      toast.error("Erro ao deslogar!");
    }

  }

  return <>
    <h1>Home</h1>
    <button onClick={handleButtonClick}>Logout</button>
  </>;
}
