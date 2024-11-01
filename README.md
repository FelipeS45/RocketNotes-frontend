# Criando um projeto React com Vite 

### Vite é uma opção mais rápida e performática para a criação de apps React

### Comando no terminal 

npm create vite@latest

Após o comando, digitar o nome do projeto sem letra maiúscula, selecionar React e JS ou TS (a depender da linguagem utilizada) e digitar os comandos que o terminal manda para instalar a pasta node_modules

# Executando o projeto React 

### Comando no terminal 

npm run dev

Após o comando, seguir o link sugerido como local no terminal. Após isso, apagar no projeto os arquivos index.css, app.css, os ícones .svg necessários e os seus respectivos imports nos arquivos que sobrarem. Então, ir para o arquivo index.html e apagar o link no "head" relacionado ao ícone do Vite + React

# Codando o projeto

Criar uma pasta "pages" dentro de "src" para organizar as páginas criadas 

import {Details} from './pages/Details.jsx' -> colocar "Details" entre {} por que a função exportada não possui "default"

### Fragment no React

Como todo componente React retorna apenas 1 elemento, coloca-se os elementos que se deseja retornar dentro de (<>) e (</>) para que seja permitido

### Pode-se colocar os elementos que se deseja retornar dentro de <div> quando se deseja que eles sejam estilizados

### Styled Components

Para instalar: npm install --save styled-components

Biblioteca do CSS para que seja utilizado o CSS - IN - JS (+ performático). Realizar o import em todo arquivo .js

### Arquivo theme.js criado para ajudar na estruturação do projeto e global.js para definir os estilos globais da página

### Biblioteca React Icons usada

site: https://react-icons.github.io/react-icons/

Para instalar: npm install react-icons --save

Biblioteca do React utilizada para adicionar ícones estilizados a páginas Web

### Conceito de children usado na pasta "section"