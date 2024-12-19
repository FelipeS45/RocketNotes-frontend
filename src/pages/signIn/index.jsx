import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";

import { Input } from "../../components/input";
import { Button } from "../../components/button";

import { useAuth } from "../../hooks/auth";

import { FiMail, FiLock } from "react-icons/fi";

export function SignIn(){

  const [email, setEmail] = useState("") // ("") - começa vazio
  const [password, setPassword] = useState("")

  const {signIn} = useAuth();

  function handleSignIn(){
    signIn({email, password})
  }

  return(
    <Container>

      <Form>

        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Faça seu Login</h2>

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

        <Button title = "Entrar" onClick = {handleSignIn}/>

        <Link to = "/register" >Criar conta</Link>

      </Form>

      <Background/>

    </Container>
  )
}