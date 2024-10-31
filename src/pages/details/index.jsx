import { Container } from "./styles"
import { Header } from "../../components/header"
import { Button } from "../../components/button"

export function Details(){ // todo componente React precisa começar com letra maiúscula 
  
  return(
    <Container>

      <Header/>

      <Button title = "Voltar" loading />

    </Container> // todo componente React retorna apenas 1 elemento
  )
}