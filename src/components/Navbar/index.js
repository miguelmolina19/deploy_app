import{ FaBars } from 'react-icons/fa'
import{ FaReact } from 'react-icons/fa'
import React from 'react'
import{IconChange, ReactIcon, Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks,MobileIcon,NavBtn,NavBtnLink} from './NavbarElements';
import{ IoIosColorFill } from 'react-icons/io'

const Navbar = ({toggle , Changed , theme}) => {
    
    return (
        <>
            <Nav>               
                <NavLogo to='/' Changed={Changed}>
                    <ReactIcon Changed={Changed}>
                    <FaReact/>
                    </ReactIcon>
                    React.js
                </NavLogo>
                <NavbarContainer>              
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' Changed={Changed}> About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover' Changed={Changed}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' Changed={Changed}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup' Changed={Changed}>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>             
                </NavbarContainer>  
                <NavBtn>
                        <NavBtnLink to="/signin" Changed={Changed}>Sign In</NavBtnLink>
                        <IconChange onClick={theme} Changed={Changed}>
                        <IoIosColorFill/>
                        </IconChange>
                </NavBtn>
                
            </Nav>
            
        </>
    )
}

export default Navbar;