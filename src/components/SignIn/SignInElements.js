import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'



export const  InputContainer = styled.div`
position: fixed;
bottom:0px;
left:0px;
right: 0px;
top: 0px;
z-index: 0;
overflow: hidden;
background: linear-gradient(
    108deg,
    #61dafb 0%,
    rgb(255, 90, 45) 100%
)
`

export const FormWrap = styled.div`
height: 100%;
display: grid;
grid-template-columns: 2.5fr 2.5fr;

@media screen and (max-width: 480px){
    padding: 80px;
}
`
export const GridLeft = styled.div`
position: relative;
top: 40%;
width: 100%;
left : 40%;
`

export const Icon = styled(LinkR)`
position: fixed;
display : flex;
gap: 5px;
text-decoration : none;
color: black;
font-weight: bold;
font-size: 3rem;

@media screen and (max-width: 740px){
display: none;
}

`
export const ReactIcon = styled.div`


align-items: center;
font-size: 3rem;
cursor: pointer;
color: black;

`
export const FormContent = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 480px){
    padding:10px
}
`
export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: white;
`


export const Form = styled.form`
background: #010101;
max-width: 400px;
height:auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 80px 32px;
border-radius: 4px;
box-shadow: 0 25px 58px rgba(0, 0, 0, 0.9);

@media screen and (max-width: 480px){
    padding: 32px 32px;
}

`

export const FormH1 = styled.h1`
margin-bottom: 40px;
color: #fff;
font-size: 20px;
font-weight: 400;
text-align: center;
`

export const FormInput = styled.input`
padding: 16px ;
margin-bottom: 32px;
border: none;
border-radius: 4px;
`
export const FormButton = styled.button`

padding: 16px 0;
border: none;
border-radius: 4px;
color: black;
font-size: 20px;
cursor: pointer;
background: linear-gradient(
    108deg,
    #61dafb 0%,
    rgb(255, 90, 45) 100%
)
`

export const Text = styled.span`
text-align : center;
margin-top : 24px;
color: #fff;
font-size: 14px;
`

