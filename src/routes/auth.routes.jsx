import { Routes, Route, Navigate } from "react-router-dom"

import { SignIn } from "../pages/signIn"
import { SignUp } from "../pages/signUp"

export function AuthRoutes(){

  const user = localStorage.getItem("@rocketnotes: user")

  return(
    <Routes>

      <Route path = "/" element = {<SignIn/>}/>
      <Route path = "/register" element = {<SignUp/>}/>
      { !user && <Route path = "*" element = {<Navigate to = "/"/>}/>} {/*para tratar rotas indesejadas. Ex.: caso um usuário queira pular da página de signIn direto para a página Details sem se autenticar previamente*/} 

    </Routes>
  )
}