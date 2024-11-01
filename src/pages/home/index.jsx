import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/header";
import { ButtonText } from "../../components/buttontext";
import { Input } from "../../components/input";
import { Section } from "../../components/section"
import { Note } from "../../components/note";


import {FiPlus, FiSearch} from "react-icons/fi"

export function Home(){

  return(
    <Container>
      <Brand>
      
        <h1>Rocket Notes</h1>

      </Brand>

      <Header/>

      <Menu>
        <li><ButtonText title = "Todos" $isactive/></li>
        <li><ButtonText title = "React"/></li>
        <li><ButtonText title = "Nodejs"/></li>
      </Menu>

      <Search>

        <Input placeholder = "Pesquisar pelo título" icon = {FiSearch}/>

      </Search>

      <Content>

        <Section title = "Minhas Notas">

          <Note data = {{
            title : "React", 
            tags: [
              {id: "1", name: "react"},
              {id: "2", name: "node"}
            ]
          }}          
          />

        </Section>

      </Content>

      <NewNote>

        <FiPlus/>
        Criar Nota

      </NewNote>
    </Container>
  )
}