import { Container, Form } from "./styles";
import { Link } from "react-router-dom";

import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Textarea } from "../../components/textarea";
import { NoteItem } from "../../components/noteitem";
import { Section } from "../../components/section";
import { Button } from "../../components/button";

export function New(){
  
  return(
    <Container>

      <Header/>

      <main>

        <Form>

          <header>

            <h1>Criar nota</h1>

            <Link to = "/" >Voltar</Link>

          </header>

          <Input placeholder = "Título"/>

          <Textarea placeholder = "Observações"/>

          <Section title = "Links úteis">

            <NoteItem value = "https://rocketseat.com.br"/>
            <NoteItem placeholder = "Novo link" isNew/>
            
          </Section>

          <Section title= "Marcadores ( Tags )">

            <div className="tags">

              <NoteItem value = "React"/>
              <NoteItem placeholder = "Nova tag" isNew/>

            </div>

          </Section>

          <Button className = "saveNote" title = "Salvar"/>

        </Form>

      </main>

    </Container>
  )
}
