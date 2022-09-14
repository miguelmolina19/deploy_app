import styled from "styled-components";


export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 650px;
position: relative;
z-index: 1;
`

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const VideoBg = styled.video`
width: 100%;
height: 100%;
object-fit: cover;

`

export const HeroContent = styled.div`
position: absolute;
bottom : 125px;
flex-direction: column;


`

export const HeroH1 = styled.h1`

font-size: 55px;
text-align: center;
font-weight: bold;
text-shadow: 3px 3px rgba(0, 0, 0, 0.9);
color: ${({ Changed }) => ( Changed ? '#61dafb' : 'rgb(255, 90, 45)')};
transition: all 0.7s ease-in-out;
@media screen and (max-width: 768px){
    font-size:40px;
}
@media screen and (max-width: 480px){
    font-size:32px;
}
`
export const HeroP = styled.p`
margin-top: 24px;
color: white;
text-shadow: 2px 2px rgba(0, 0, 0, 0.9);
font-size: 25px;
text-align: center;
max-width: 600px;

@media screen and (max-width: 768px){
    font-size:30px;
}
@media screen and (max-width: 480px){
    font-size:25px;
}
`
export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`


