import { ReactComponent as Logo } from '../../img/logo.svg'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import './navbar.css'

const NavBar = () => {


    return(
    <>
 <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Logo />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
    )
}



const HeaderStyle = styled.a`
overflow: hidden;
background-color: blue;
padding: 20px 10px;
`

export default NavBar;