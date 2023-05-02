/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './App.css';
import MyResumeComponent from './Components/MyResumeComponent';
import HeaderComponent from './Components/General/HeaderComponent';

export interface IUser{
  name:string ;
  fistName:string ;
  lastName:string ;
  age:number;
  currentPosition:string;
  yearsExperience:number;
  }



function App() {

  const info : IUser = ({name:'Ricardo', fistName:'Montaño', lastName:'Arceo',age:29,currentPosition:'FullStack Developer',yearsExperience:4})

  return (
  <>
    <HeaderComponent/>
    <MyResumeComponent props={info} />
  </>

  );
}

export default App;
