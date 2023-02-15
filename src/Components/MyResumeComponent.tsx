import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select'
import Swal from 'sweetalert2';
import { PropsSelect } from '../App';



const MyResumeComponent = ({props}: any) => {
    
      const [option, setOption] =  useState(Object);
      const [label, setLabel] =  useState('');
      const handleChange = (data:any) => {
        data.forEach((item:any) => {
            setOption({...item})
        });
      };


      useEffect(() => {
        setLabel(props.label);
        console.log(label);
        
      },[props]);
    
      useEffect( () => {
        if(option){
            Swal.fire({
                icon: 'success',
                title: option.value,
                text: option.label,
              })
        }
      },[option]);

    return(
        <>
            <Container>
            <div>
                <h1>{props.label}</h1>
                <Select
                    isMulti={props.isMulti}
                    name={props.name}
                    options={props.listado}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={handleChange}
                />
            </div>

            </Container>
        </>
    )
}

export default MyResumeComponent;


const Container = styled.a`
    display:flex;
    margin:auto;
    width:50%;
    justify-content:center;
`