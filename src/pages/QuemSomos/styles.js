import styled from 'styled-components'

export const PageBodyContainer = styled.div`
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const WhoWeAreSection = styled.div`
    margin-top: 3em;
    display: flex;
    flex-direction: column;
    width: 85%;
    justify-content: space-around;
    background-color: #fff;
`;

export const ImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 150px;
    flex:1;
    justify-content: flex-start;
    align-items: space-between;
`;

export const MemberImg = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background-color: #0B64E1;
    margin-right: 60px;

    @media(max-width: 960px) {
        margin: 0 10px 0 10px;
    }
`;


export const PartnerImg = styled.img`
    height: 150px;
    width: 300px;
    border-radius: 10px;
    background-color: #0B64E1;
    margin-top: 10px;
    margin: 0 10px 0 10px;
`;

export const ProjectCardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
    width: 100%;

`;


export const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    width:400px;
    height:100%;
    margin: 10px 0 10px 0;
    overflow-y: hidden;
    overflow-x: hidden;

    @media(max-width: 960px) {
        height: 600px;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }
`;


export const ProjectImg = styled.img`
    height: 250px;
    width: 100%;
    border-radius: 10px;
    background-color: #0B64E1;

    @media(max-width: 960px) {
        height: 150px;
    }

`;

export const ProjectTitle = styled.h1`
    margin: 20px 0 0 0;
    font-size: 25px;
    line-height: 35px;
    font-weight: 600;
    color: #2F281E;
`;

export const ProjectDescription = styled.h1`
    margin: 20px 0 0 0;
    font-size: 20px;
    line-height: 25px;
    font-weight: 400;
    color: #544837;
`;

export const ProjectButton = styled.a`
    margin-top: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 100%;
    border-radius: 4px;
    background-color: #0B64E1;
    text-decoration:none;
    color:#fff;
    font-size: 16px;
    font-weight: 800;
    line-height: 20px;
    transition: all 0.3s ease 0s;

    :hover {
        background-color: #3CC5FF;
    }
`;