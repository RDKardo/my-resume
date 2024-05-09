import react from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const CredentialComponent = () => {

    const handleClick = () => {
        alert("click")
      }




    return (
        <>
        <Container>
                <h1>New Credential</h1>
                <TextField id="standard-basic" label="Description" variant="standard" />                <br></br>
                <TextField id="standard-basic" label="Username" variant="standard" />                <br></br>
                <TextField id="standard-basic" label="Password" variant="standard" />
                <br></br>
                <Button onClick={handleClick} variant="contained">Save</Button>


               
        </Container>
        </>
        // <Container>
            
        //  </Container>
       
    )
}


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export default CredentialComponent;

