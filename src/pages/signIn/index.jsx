import { Container, Form, Background } from "./styles";

import {Input} from "../../components/input"
import {Button} from "../../components/button"

import {FiMail, FiLock} from "react-icons/fi"

export function SignIn(){

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
        />

        <Input
          placeholder = "Senha"
          type = "password"
          icon = {FiLock}
        />

        <Button title = "Entrar"/>

        <a href="#">Criar conta</a>

      </Form>

      <Background/>

    </Container>
  )
}