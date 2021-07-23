import styled from 'styled-components'


export const DivisionContainer = styled.div`
    width: 100%;
    height: 35%;
    padding: 2% 0% 2% 0%;
    background-color: #0B64E1;
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 100px;
    margin-left: 0;
    margin-right: 0;
`;

export const DivisionContent = styled.div`
    height: 100%;  
    width: 85%; 
    display: flex;
    justify-content:space-between;
    align-items: center;

    @media(max-width: 960px) {
        flex-direction:column;
        justify-content: center;
        align-items:center;
        padding-top: 10px;
        padding-bottom: 20px;
    }

`;

export const LogoContainer = styled.div`
    width: 300px;
`;

export const Logo = styled.img`
    width:100%;
    height:100%;
`;

export const DivisionInfo = styled.div`
    flex:1;
    margin-left: 200px;
    display:flex;
    flex-direction: column;
    justify-content:space-evenly;

    @media(max-width: 960px) {
        margin-left: 0px;
        align-items:center;
    }
`;

export const Description = styled.h1`
    color:#fff;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 2em;
    margin-top: 2em;
    @media(max-width: 960px) {
        text-align: justify;
    }
`;


