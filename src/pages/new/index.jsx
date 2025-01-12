import { Container, Form } from "./styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { api } from "../../services/api";

import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Textarea } from "../../components/textarea";
import { NoteItem } from "../../components/noteitem";
import { Section } from "../../components/section";
import { Button } from "../../components/button";

export function New(){

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleAddLink() {
    
    setLinks(prevState => [...prevState, newLink])

    setNewLink("")
  }

  function handleRemoveLink(deleted) {

    setLinks(prevstate => prevstate.filter(link => link !== deleted))
  }

  function handleAddTag() {

    setTags(prevState => [...prevState, newTag])

    setNewTag("")
  }

  function handleRemoveTag(deleted) {

    setTags(prevstate => prevstate.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {

    if (!title) {
      return alert("É necessário preencher o título da nota.");
    }
  
    if (!description) {
      return alert("É necessário preencher a descrição da nota.");
    }
  
    if (newLink) {
      return alert("Você deixou um link pendente. Adicione-o ou remova-o antes de salvar.");
    }
  
    if (newTag) {
      return alert("Você deixou uma tag pendente. Adicione-a ou remova-a antes de salvar.");
    }
  
    if (links.length === 0) {
      return alert("É necessário adicionar pelo menos um link.");
    }
  
    if (tags.length === 0) {
      return alert("É necessário adicionar pelo menos uma tag.");
    }
  
    try {
      await api.post("/notes", {
        title,
        description,
        tags,
        links,
      });
  
      alert("Nota criada com sucesso!");
      navigate("/");

    } catch (error) {
      alert("Erro ao criar nota. Tente novamente");
    }
  }

  return(
    <Container>

      <Header/>

      <main>

        <Form>

          <header>

            <h1>Criar nota</h1>

            <Link to = "/" >Voltar</Link>

          </header>

          <Input placeholder = "Título"
            onChange = {event => setTitle(event.target.value)}          
          />

          <Textarea placeholder = "Observações"
            onChange = {event => setDescription(event.target.value)}
          />

          <Section title = "Links úteis">

            {
              links.map((link, index) => (

                <NoteItem 
                  key = {String(index)}
                  value = {link} 
                  onClick = {() => handleRemoveLink(link)}
                />
              ))
            }

            <NoteItem placeholder = "Novo link"
              value = {newLink} 
              onChange = {event => setNewLink(event.target.value)}
              onClick = {handleAddLink}
              isNew
            />
            
          </Section>

          <Section title= "Marcadores ( Tags )">

            <div className="tags">

              {
                tags.map((tag, index) => (

                  <NoteItem 
                    key = {String(index)}
                    value = {tag}
                    onClick = {() => handleRemoveTag(tag)}
                  />
                ))
              }

              <NoteItem placeholder = "Nova tag"
                onChange = {event => setNewTag(event.target.value)}
                value = {newTag}
                onClick = {handleAddTag}
                isNew
              />

            </div>

          </Section>

          <Button className = "saveNote" title = "Salvar"
            onClick = {handleNewNote}
          />

        </Form>

      </main>

    </Container>
  )
}
