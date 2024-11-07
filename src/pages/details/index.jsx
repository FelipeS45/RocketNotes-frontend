import { Container, Links, Content } from "./styles"

import { Header } from "../../components/header"
import { Button } from "../../components/button"
import { Section } from "../../components/section"
import { Tag } from "../../components/tag"
import { ButtonText } from "../../components/buttontext"

export function Details(){ // todo componente React precisa começar com letra maiúscula 
  
  return(
    <Container>

      <Header/>

      <main>
        <Content>        

        <ButtonText title = "Excluir nota"/>

        <h1>Introdução ao React</h1>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique aut dolorem temporibus asperiores, in eum tempora atque sint minima nesciunt repudiandae nostrum voluptate nulla quo tenetur nisi? Magni, facere sit.</p>

        <Section title = "Links úteis">

          <Links>
            <li>
              <a href="#">https://www.rocketseat.com.br</a>
            </li>

            <li>
              <a href="#">https://www.rocketseat.com.br</a>
            </li>
          </Links>

        </Section>

        <Section title = "Marcadores">

          <Tag title = "express"/>
          <Tag title = "nodejs"/>

        </Section>

        <Button title = "Voltar"/>

        </Content>
      </main>

    </Container> // todo componente React retorna apenas 1 elemento
  )
}