import react from 'react';
import Swal from 'sweetalert2';
import style from './MyResumeComponent.module.css';


const AboutComponent = ({props}: any) => {
    const handleClick = () => {
        Swal.fire({
            title: 'RDK',
            text: 'visit our youtube channel Curiosos x el Universo',
            imageUrl: require('../img/r2.jpg'),
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'Custom image',
          })
    }
      

    return(
        <>
        <h1> About Me</h1>
        <h2> </h2>

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

export default AboutComponent;