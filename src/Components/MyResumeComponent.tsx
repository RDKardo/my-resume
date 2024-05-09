import styled from 'styled-components';
import Swal from 'sweetalert2';
import style from './MyResumeComponent.module.css';




const MyResumeComponent = ({props}: any) => {
    


const handleClick = () => {
    Swal.fire({
        title: 'RDK',
        text: 'Hi, greetings from Amazon web services RDKardo',
        imageUrl: require('../img/r2.jpg'),
        imageWidth: 479,
        imageHeight: 640,
        imageAlt: 'Custom image',
      })
}
  

    return(
        <>
            {/* <Container> */}
            <div>
                <h3>FirstName: <span>{props.fistName}</span> </h3>
                <h3>LastName: <span>{props.lastName}</span></h3>
                <h3>Age: <span>{props.age}</span></h3>
                <h3>Current Position: <span>{props.currentPosition}</span></h3>
                <h3>Year's Experience: <span>{props.yearsExperience}</span></h3>
            </div>

            {/* </Container> */}
            <button  className={style.block} type="button" onClick={handleClick} >Surprise</button>
        </> 
    )
}

export default MyResumeComponent;


const Container = styled.div`
    display:grid;
    margin-left: 50%;
    margin-right:50%;
    justify-content:center;
    font-style:italic;

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

