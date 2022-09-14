import styled from "styled-components";
import {Link} from 'react-scroll'

export const Button = styled(Link)`
border-radius: 50px;
background: black;
white-space : nowrap;
padding: 12px 30px;
color : #fff;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    color: black;
    background: rgb(255, 90, 45);

}

`