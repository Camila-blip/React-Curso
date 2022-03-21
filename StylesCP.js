import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
heigth: 500px;
`;

export const Head = styled.header `
width: 100%;
heigth: 70%;
background-color: brown;
display: flex;
place-content: center;

a{
    font-size: 45px;
    color: #fff;
}
`;

export const BemVindo = styled.h1 `
font-size: ${props => `${props.tamanho}px`};
color: ${props => `#${props.cor}`};
`;
