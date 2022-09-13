import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'



export const  InputContainer = styled.div`
min-height: 692px;
position: fixed;
bottom:0;
left:0;
right: 0;
top: 0;
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
display: flex;
flex-direction: column;
justify.content: center;

@media screen and (max-width: 480px){
    padding: 80px;
}
`
export const Icon = styled(LinkR)`
margin-left : 0px;
margin-top : 32px;
display : flex;
gap: 5px;
text-decoration : none;
color: Black;
font-weight: bold;
font-size: 1.5rem;
align-items: center;

`
export const ReactIcon = styled.div`

display: flex;
margin-left: 150px;
align-items: center;
font-size: 1.8rem;
cursor: pointer;
color: black;
@media screen and (max-width: 480px){
    margin-left :0px;
    margin-top :8px;
}

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
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

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
padding: 16px 16px;
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

