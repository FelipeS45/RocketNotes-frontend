import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Form, Avatar } from "./styles";

import { api } from "../../services/api"

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/input";
import { Button } from "../../components/button";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

export function Profile(){

  const {user, updateProfile} = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]

    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  async function handleUpdate() {
    
    const updated = {
      name, 
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({user: userUpdated, avatarFile})
  }

  return(
    <Container>

      <header>

        <button type = "button" title = "Voltar" onClick = {handleBack}>
          <FiArrowLeft size = {24}/>
        </button>

      </header>

      <Form>

        <Avatar>

          <img 
            src = {avatarUrl} 
            alt="Foto do usuário"
          />

          <label htmlFor = "avatar">

            <FiCamera/>

            <input 
              id = "avatar" 
              type = "file"
              onChange = {handleChangeAvatar}
            />

          </label>

        </Avatar>

        <Input
          placeholder = "Nome"
          type = "text"
          icon = {FiUser}
          value = {name}
          onChange = {event => setName(event.target.value)}
        />

        <Input
          placeholder = "E-mail"
          type = "text"
          icon = {FiMail}
          value = {email}
          onChange = {event => setEmail(event.target.value)}
        />

        <Input
          placeholder = "Senha atual"
          type = "password"
          icon = {FiLock}
          onChange = {event => setPasswordOld(event.target.value)}
        />

        <Input
          placeholder = "Nova senha"
          type = "password"
          icon = {FiLock}
          onChange = {event => setPasswordNew(event.target.value)}
        />

        <Button title = "Salvar" onClick = {handleUpdate}/>

      </Form>

    </Container>
  )
}