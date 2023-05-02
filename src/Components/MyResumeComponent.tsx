import styled from 'styled-components';




const MyResumeComponent = ({props}: any) => {
    



  

    return(
        <>
            <Container>
            <div>
                <h1> Name : {props.name}</h1>
                <h1>FirstName: {props.fistName}</h1>
                <h1>LastName: {props.lastName}</h1>
                <h1>Age: {props.age}</h1>
                <h1>Current Position:{props.currentPosition}</h1>
                <h1>Years Experience: {props.yearsExperience}</h1>

                
            </div>

            </Container>
        </>
    )
}

export default MyResumeComponent;


const Container = styled.a`
    display:flex;
    margin:auto;
    width:30%;
    justify-content:center;
    border:2px solid #006100;
    border-radius:10px;
    font-style:italic;
`