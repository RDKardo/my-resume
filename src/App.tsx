/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import './App.css';
import AboutComponent from './Components/AboutComponent';
import NavBar from './Components/General/NavBar';
import HomeComponent from './Components/HomeComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CredentialComponent from './Components/CredentialComponent';


export interface IUser{
  fistName:string ;
  lastName:string ;
  age:number;
  currentPosition:string;
  yearsExperience:number;
  }



function App() {

  const info : IUser = ({fistName:'Ricardo', lastName:'Arceo',age:29,currentPosition:'FullStack Developer',yearsExperience:4})

  return (
  <>
    <BrowserRouter>
      <NavBar />
      <Layout>
      <Routes>
        <Route  path="/" element={<HomeComponent />} />
        <Route  path="/about" element={<AboutComponent props={info} />} />
        <Route  path="/Credential" element={<CredentialComponent />} />
        {/* <Route  path="/contact" element={<Contact />} /> */}
      </Routes>
      </Layout>

  
    </BrowserRouter>
  </>

  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // height: 100vh;
  // padding: 0 20px; /* Añade espacio a los lados del contenido */

  h1 {
    display:block;
    color:blue;
    margin-left:10%;
    color: blue; /* Cambia el color del texto */
  }

  h3 {
    font-size: 20px;
    text-align: center;
    color: black;
    margin-bottom: 10px; /* Añade espacio debajo del subtítulo */
  }

  span {
    color: blue;
    font-style: italic;
    font-size: 14px;
  }
`;

export default App;
