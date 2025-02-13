import { useNavigate, useLocation } from "react-router-dom";

import { Container, Profile, Logout } from "./styles";

import { RiShutDownLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header({ onMenuToggle }) {
  const { signOut, user } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()

  function handleSignOut() {
    navigate("/")

    signOut()
  }

  const avatarUrl = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder

  return (
    <Container>

      <div className="profile-wrapper">
        
        {
          location.pathname === "/" && 
          (
            <div className="togglemenu">
              <button onClick={onMenuToggle}> 
                <FiMenu />
              </button>
            </div>
          )
        }

        <div className="profile">

          <Profile to="/profile">

            <img src={avatarUrl} alt="foto do usuário" />

            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>

          </Profile>

        </div>
      
      </div>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>

    </Container>
  )
}