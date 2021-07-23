import styled from "styled-components";

export const QandAContainer = styled.div`

`
export const QandASection = styled.div`
    margin: 2em;
    padding: 1em;
    display: flex;
    flex-direction: column; 
`;

export const QandASubtittleItalic = styled.h1`
    font-style: italic;
    font-weight: 500;
    font-size: 30px;
    line-height: 40px;
    color: #544837;
    @media screen and (max-width: 960px) {        
        font-size: 25px;
    }
`
export const QandASubtittleNormal = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
    color: #544837;
`
export const QandADescription = styled.p`
    font-weight: 500;
    font-size: 30px;
    line-height: 40px;
    color: #544837;
    margin-bottom: 1em;
    @media screen and (max-width: 960px) {        
        font-size: 20px;
    }
`;

export const QandAList = styled.ul`
    margin-left: 2em;
`;
export const QandAListItem = styled.li`
    width:100%
    
`
export const QandAAnchor = styled.a`
    text-decoration: none;
    color: #3CC5FF;
    @media screen and (max-width: 960px) {        
        text-align: justify;
    }

`