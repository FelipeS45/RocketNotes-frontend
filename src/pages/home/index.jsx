import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { api } from "../../services/api";

import { Container, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/header";
import { ButtonText } from "../../components/buttontext";
import { Input } from "../../components/input";
import { Section } from "../../components/section";
import { Note } from "../../components/note";

import { FiPlus, FiSearch, FiX } from "react-icons/fi";

export function Home() {
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])

  const [search, setSearch] = useState("")

  const [notes, setNotes] = useState([])

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const navigate = useNavigate()

  function handleTagSelected(tagName) {
    if (tagName === "all") {
      return setTagsSelected([])
    }

    const alreadySelected = tagsSelected.includes(tagName)

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter((tag) => tag !== tagName)
      setTagsSelected(filteredTags)

    } else {
      setTagsSelected((prevState) => [...prevState, tagName])
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
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
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`
      )

      setNotes(response.data)
    }

    fetchNotes()
  }, [search, tagsSelected])

  return (
    <Container menuIsOpen={menuIsOpen}>

      <Header onMenuToggle={() => setMenuIsOpen(!menuIsOpen)} />

      {
        menuIsOpen && 
        (
          <Menu menuIsOpen={menuIsOpen}>

            <div className="brand">

              <div className="logo">
                <h1>Rocket Notes</h1>
              </div>

              <button className="togglemenu" onClick={() => setMenuIsOpen(false)}>
                <FiX />
              </button>

            </div>

            <li>
              <ButtonText
                title="Todos"
                onClick={() => handleTagSelected("all")}
                isActive={tagsSelected.length === 0}
              />
            </li>

            {
              tags && tags.map((tag) => 
              (
                <li key={String(tag.id)}>
                  <ButtonText
                    title={tag.name}
                    onClick={() => handleTagSelected(tag.name)}
                    isActive={tagsSelected.includes(tag.name)}
                  />
                </li>
              ))
            }

            <NewNote to="/new">
              <FiPlus />
              Criar Nota
            </NewNote>

          </Menu>
        )
      }

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
          onChange={(event) => setSearch(event.target.value)}
        />
      </Search>

      <Content>

        <Section title="Minhas Notas">

          {
            notes.map((note) => 
            (
              <Note
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
            ))
          }

        </Section>

      </Content>

    </Container>
  )
}