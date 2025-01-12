import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { useState } from "react";
import { useEffect } from "react";

import { api } from "../../services/api";

import { Header } from "../../components/header";
import { ButtonText } from "../../components/buttontext";
import { Input } from "../../components/input";
import { Section } from "../../components/section";
import { Note } from "../../components/note";

import { FiPlus, FiSearch } from "react-icons/fi";

export function Home(){

  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])

  const [search, setSearch] = useState("")

  const [notes, setNotes] = useState([])

  function handleTagSelected(tagName) {

    const alreadySelected = tagsSelected.includes(tagName)

    if(alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filteredTags)

    } else {
      setTagsSelected(prevState => [...prevState, tagName])
    }
  }

  useEffect(() => {
    async function fetchTags() {
      
      const response = await api.get("/tags")
      setTags(response.data)
    }

    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)

      setNotes(response.data)
    }

    fetchNotes()

  }, [search, tagsSelected])

  return(
    <Container>

      <Brand>
      
        <h1>Rocket Notes</h1>

      </Brand>

      <Header/>

      <Menu>

        <li>
          <ButtonText title = "Todos"
            onClick = {() => handleTagSelected("all")}
            isActive = {tagsSelected.length === 0}
          />
        </li>

        {
          tags && tags.map(tag => (
            <li key = {String(tag.id)}>
              <ButtonText title = {tag.name}
                onClick = {() => handleTagSelected(tag.name)}
                isActive = {tagsSelected.includes(tag.name)}
              />
            </li>
          ))
        }

      </Menu>

      <Search>

        <Input placeholder = "Pesquisar pelo título" 
          icon = {FiSearch}
          onChange = {(event) => setSearch(event.target.value)}
        />

      </Search>

      <Content>

        <Section title = "Minhas Notas">

          {
            notes.map(note => (
              <Note 
                key = {String(note.id)}
                data = {note}          
              />
            ))
          }

        </Section>

      </Content>

      <NewNote to = "/new" >

        <FiPlus/>
        Criar Nota

      </NewNote>
      
    </Container>
  )
}