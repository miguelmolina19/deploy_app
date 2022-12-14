import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
transition: 0.3s ease-in-out;

`;
export const CloseIcon = styled(FaTimes)`
color: #fff;
`;
export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

export const SidebarWrapper = styled.div`
color: #fff;
`

export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2 ease-in-out;
text-decoration: none;
color: white;
cursor: pointer;

&:hover{
    color: ${({ Changed }) => ( Changed ? '#61dafb' : 'rgb(255, 90, 45)')};
    transition: 0.2s ease-in-out;
}

`

export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
border-radius: 50px;
background: ${({ Changed }) => ( Changed ? '#61dafb' : 'rgb(255, 90, 45)')};
white-space: nowrap;
padding: 16px 64px;
color: black;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    background:${({ Changed }) => ( Changed ? 'rgb(255, 90, 45)' : '#61dafb')};
    color:  black;
}

`
export const SidebarMenu = styled.ul`
display: grid;

grid-template-columns: 1fr;
grid-template-rows: repeat(5, 70px);
`


