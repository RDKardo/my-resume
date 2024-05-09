/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import './App.css';
import AboutComponent from './Components/AboutComponent';
import NavBar from './Components/General/NavBar';
import HomeComponent from './Components/HomeComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


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
        {/* <Route  path="/contact" element={<Contact />} /> */}
      </Routes>

      </Layout>

  
    </BrowserRouter>
  </>

  );
}


const Layout = styled.div`

    display:contents;
    margin-left: 100%;
    margin-right:100%;
    justify-content:center;

    h1{
      display:block;
      color:blue;
      margin-left:10%;
    }

    h3{
        font-size:20px;
        text-align:center;
        color:black;
    }
    span{
        color:blue;
        font-style:italic;
        font-size:14px;
    }
`
export default App;
