import styled from 'styled-components'

export const PageBodyContainer = styled.div`
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HomeSection = styled.section`
    margin-top: 3em;
    margin-bottom: 3em;
    width: 85%;
    padding: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;

    @media(max-width: 960px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const SectionContent = styled.section`
    flex:1; 
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    height:100%;  

    @media(max-width: 960px) {
        justify-content: center;
        align-items: center;
    }

`;

export const Play = styled.img`
    width: 100%;
    height: 100%;
    padding: 10px;
    :hover{
        cursor: pointer;
    }
    @media(max-width: 960px) {
        display: none;
    }
`;

export const LocationsSection = styled.div`
    display: flex;
    width: 100%;
    height: 180px;
    justify-content: center;
    align-items: center;
    background-color: #0B64E1;
    margin-top: 2em;
`;

export const LocationsContainer = styled.div`
    width: 85%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    @media(max-width: 960px) {
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Location = styled.div`    
    width: 350px;
    height: 50px;
    border-radius: 50px;
    background-color: #fff;
    color: #979797;   
    display: flex;
    justify-content:center;
    align-items:center;
    margin:10px;

`;

export const PictureContainer = styled.div`
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
    @media(max-width: 960px) {
        display:none;
    }
`;

export const Picture = styled.img`
    width: 55%;
    height: 50%;
    padding: 10px;
`;


export const Newsletter = styled.button`    
    width: 100%;
    margin: 10px;
    height: 50px;
    border: solid 1px #979797;
    border-radius: 50px;
    background-color: #fff;
    color: #979797;   
    display: flex;
    justify-content:center;
    align-items:center;
    font-weight:700;
    font-size: 24px;
    transition: all 0.3s ease 0s;
    
    :hover{
        border: solid 1px #000;
        color: #000;   
    }
`;
