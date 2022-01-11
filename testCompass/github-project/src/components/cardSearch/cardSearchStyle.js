import styled from 'styled-components'

export const CardSearchStyle = styled.div`
width: 90%;
max-width: 600px;
margin-top: 35px;
background-color: #4f4f4f;
height: 170px;
border-radius: 20px;
display: flex;
justify-content: center;
flex-direction: column;

@media(max-width: 800px) {
   margin-top:20px;
   height: 150px;
}

`;