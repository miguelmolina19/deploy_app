import{ FaBars } from 'react-icons/fa'
import{ FaReact } from 'react-icons/fa'
import React from 'react'
import{IconChange, ReactIcon, Nav, NavLogo, NavMenu, NavItem, NavLinks,MobileIcon,NavBtn,NavBtnLink, IconContainer} from './NavbarElements';
import{ IoIosColorFill } from 'react-icons/io'

const Navbar = ({toggle , Changed , theme}) => {
    
    return (
        <>
            <Nav> 
                <IconContainer>
                    <NavLogo to='/' Changed={Changed}>
                    <ReactIcon Changed={Changed}>
                    <FaReact/>
                    </ReactIcon>
                    React.js
                </NavLogo> 
                </IconContainer>                                  
                <MobileIcon onClick={toggle}>
                        <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about' Changed={Changed}> About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='advantages' Changed={Changed}>Advantages</NavLinks>
                    </NavItem>       
                    <NavItem>
                        <NavLinks to='signup' Changed={Changed}>Sign Up</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='contact' Changed={Changed}>Contact</NavLinks>
                    </NavItem>
                </NavMenu>             
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