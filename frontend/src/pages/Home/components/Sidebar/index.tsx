import { useEffect, useRef, useContext } from "react";
import { AuthContext } from "../../../../context/Auth/AuthContext.jsx";
import { toast } from "react-toastify";
import { socketConnection } from "../../../../services/socket";
import { HeaderDetails, HeaderLogo, ItemsContainer, ItemsContainerTop, ItemsHeader, LogoutBtn, OpenBtn, SideBarContainer, SidebarNav } from "./styles";
import profileImg from "../../../../assets/profile-image.png"
import { Bell, BookmarkSimple, CaretRight, EnvelopeSimple, Hash, House, SignOut, Users } from "phosphor-react";

export function Sidebar({ isHover, setIsHover }) {
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

  return (
    <SideBarContainer data-state={`sidebar-${isHover ? "active" : ""}`}>
      <OpenBtn onClick={() => setIsHover((prev) => !prev)}>
        <CaretRight weight="bold" size={12} />
      </OpenBtn> 
      <ItemsContainer>
        <ItemsContainerTop>
          <ItemsHeader>
            <HeaderLogo>
            <img src={profileImg} alt="" />
            </HeaderLogo>
              
            <HeaderDetails>
              <span>Joãozinho</span>
              <span>joaozinho@gmail.com</span>
            </HeaderDetails>
          </ItemsHeader>

          <SidebarNav>
            <ul>
              <li><a href="#"><House size={24}/> Home</a></li>
              <li><a href="#"><Hash size={24} /> Popular</a></li>
              <li><a href="#"><Bell size={24} /> Notifications</a></li>
              <li><a href="#"><EnvelopeSimple size={24} /> Messages</a></li>
              <li><a href="#"><Users size={24} /> Community</a></li>
              <li><a href="#"><BookmarkSimple size={24} /> Bookmarks</a></li>
            </ul>
          </SidebarNav>
        </ItemsContainerTop>

        <LogoutBtn onClick={handleButtonClick}><SignOut size={24} /> Logout</LogoutBtn>
      </ItemsContainer>
    </SideBarContainer>
  )
}