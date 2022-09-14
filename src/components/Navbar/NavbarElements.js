import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'


export const Nav= styled.nav`
background: #000;
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;


@media screen and (max-width : 960px){
    transition: 0.8s all ease;
}
`;

export const IconContainer = styled.div`
margin-left: 150px;
`

export const NavLogo = styled(LinkR)`
color: #61dafb;
cursor: pointer;
font-size: 1.5rem;
display: flex;
gap: 5px;
align-items: center;
font-weight: bold;
text-decoration: none;
color: ${({ Changed }) => ( Changed ? 'rgb(255, 90, 45)' : '#61dafb')};
transition: all 0.7s ease-in-out;

@media screen and (max-width: 768px){
    margin-left: 50px;
}
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;  
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
gap : 40px;

@media screen and (max-width: 768px){
    display: none;
}
`;


export const NavItem = styled.li`
height: 80px;
`;

export const NavLinks = styled(LinkS)`
color: white;
display: flex;
align-items: center;
height: 100%;
cursor: pointer;

&:hover{
    color: ${({ Changed }) => ( Changed ? 'rgb(255, 90, 45)' : '#61dafb')};
}

`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 75px;
@media screen and (max-width: 768px){
    display: none;
}
`
export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: #61dafb;
white-space: nowrap;
padding: 10px 31px;
color: black;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.7s ease-in-out;
text-decoration: none;
margin-right: 15px;
background: ${({ Changed }) => ( Changed ? 'rgb(255, 90, 45)' : '#61dafb')};
`

export const ReactIcon = styled.div`

display: flex;

align-items: center;
font-size: 1.8rem;
cursor: pointer;
color: #61dafb;
color: ${({ Changed }) => ( Changed ? 'rgb(255, 90, 45)' : '#61dafb')};
transition: all 0.7s ease-in-out;
@media screen and (max-width: 768px){
    margin-left: 0px;
}
`

export const IconChange = styled.div`
color: #61dafb;
margin-right: 100px;
font-size : 2rem;
cursor: pointer;    
margin-top: 8px;
color: ${({ Changed }) => ( Changed ? 'rgb(255, 90, 45)' : '#61dafb')};
transition: all 0.7s ease-in-out;
`