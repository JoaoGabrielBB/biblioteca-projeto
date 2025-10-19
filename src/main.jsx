import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './paginas/Home';
import Rodape from './components/Rodape';
import Header from './components/Header';
import FichaLivro from './paginas/FichaLivro';
import FichaAutor from './paginas/FichaAutor';



const GlobalStyle = createGlobalStyle`
body {
  @import url('https://fonts.googleapis.com/css2?family=Krona+One&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Krona One',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace, 'Roboto', 'Krona One';
}


`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyle />
      <Header/>
 
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/livro/:id" element={<FichaLivro/>}/>
          <Route path="/autor/:id" element={<FichaAutor/>}/>
          
          
        </Routes>

      <Rodape/> 
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
