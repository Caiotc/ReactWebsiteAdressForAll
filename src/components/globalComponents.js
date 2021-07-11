import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom';

export const Title = styled.h1`
    font-weight: 800;
    font-size: 75px;
    line-height: 100px;
    color: #000;
`;

export const SubTitle = styled.h1`
    font-weight: 800;
    font-size: 36px;
    line-height: 43px;
    color: #000;
`;

export const Description = styled.div`
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
    color: #544837;
    margin-bottom: 1em;
`;

export const DarkBlueButton = styled.button`
    background-color: #0B64E1;
    height: 60px;
    width: 270px;
    border:none;
    border-radius: 4px;
    color:#fff;
    font-size: 16px;
    font-weight: 800;
    text-align: center;
    cursor: pointer;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 1);
    transition: all 0.3s ease 0s;

    :hover{
        background-color: #3CC5FF;   
        transform: translateY(-7px);
        box-shadow: 0px 15px 20px rgba(0, 0, 0, 1);
    }
`;

export const LightBlueButton = styled.button`
    background-color: #3CC5FF;
    height: 60px;
    width: 270px;
    border:none;
    border-radius: 4px;
    color:#fff;
    font-size: 16px;
    font-weight: 800;
    text-align: center;
    cursor: pointer;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 1);
    transition: all 0.3s ease 0s;

    :hover{
        background-color: #0B64E1;  
        transform: translateY(-7px); 
        box-shadow: 0px 15px 20px rgba(0, 0, 0, 1);

    }
`;
export const Link = styled.a`
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
    color: #3CC5FF;
    margin-bottom: 1em;
    text-decoration: underline;
`
export const HilightLigthBlue = styled.p`
    color: #3CC5FF;
`;

export const LightBlueLink = styled(RouterLink)`
    background-color: #3CC5FF;
    display:flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 270px;
    border:none;
    border-radius: 4px;
    color:#fff;
    font-size: 16px;
    font-weight: 800;
    text-align: center;
    cursor: pointer;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 1);
    transition: all 0.3s ease 0s;
    text-decoration:none;

    :hover{
        background-color: #0B64E1;  
        transform: translateY(-7px); 
        box-shadow: 0px 15px 20px rgba(0, 0, 0, 1);

    }
`;

