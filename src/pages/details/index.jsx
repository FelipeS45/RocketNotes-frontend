import { Container } from "./styles"
import { Button } from "../../components/button"

export function Details(){ // todo componente React precisa começar com letra maiúscula 
  
  return(
    <Container>

      <h1>Batata</h1>

      <Button title = "Login" loading />

    </Container> // todo componente React retorna apenas 1 elemento
  )
}