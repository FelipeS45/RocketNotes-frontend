import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { Link, useNavigate } from "react-router-dom";

import {api} from "../../services/api"

import {Input} from "../../components/input";
import {Button} from "../../components/button";

import {FiMail, FiLock, FiUser} from "react-icons/fi";

export function SignUp(){

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){
    if(!name || !email || !password){
      return alert("Preencha todos os campos")
    }

    api.post("/users", {name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso!")
      navigate("/")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      } else{
        alert("Não foi possível realizar o cadastro")
      }
    })
  }

  return(
    <Container>

      <Background/>

      <Form>

        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Crie a sua conta</h2>

        <Input
          placeholder = "Nome"
          type = "text"
          icon = {FiUser}
          onChange = {event => setName(event.target.value)}
        />

        <Input
          placeholder = "E-mail"
          type = "text"
          icon = {FiMail}
          onChange = {event => setEmail(event.target.value)}
        />

        <Input
          placeholder = "Senha"
          type = "password"
          icon = {FiLock}
          onChange = {event => setPassword(event.target.value)}
        />

        <Button title = "Cadastrar" onClick = {handleSignUp}/>

        <Link to = "/" >Voltar para Login</Link>

      </Form>

    </Container>
  )
}