/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './App.css';
import MyResumeComponent from './Components/MyResumeComponent';

export interface PropsSelect{
  label:string ;
  name:string ;
  isMulti:boolean ;
  listado:any[] ;
}


function App() {
  const selectObject:PropsSelect = {
    label:'Test Select Props',
    name:'idSelect1',
    isMulti: true,
    listado:[
      { value: 'c#', label: 'C#' },
      { value: 'sql', label: 'SQL Server' },
      { value: 'react', label: 'React' },
      { value: 'java', label: 'Java' },
      { value: 'redux', label: 'Redux' }
    ],
  }

  return (
    <MyResumeComponent props={selectObject} />
  );
}

export default App;
