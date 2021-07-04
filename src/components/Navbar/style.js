import styled from 'styled-components'

export const NavbarContainer = styled.div`
    width: 100%;
    height: 150px;
    padding: 2% 0% 2% 0%;
    background-color: #0B64E1;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const NavbarLogo = styled.img`
    width: 150px;
    margin-top: -10px;
`;

export const NavbarContent = styled.div`
    height: 100%;  
    width: 85%; 
    display: flex;
    justify-content:space-between;
    align-items: center;
`;

export const NavbarAnchor = styled.a`
    color: #FFFFFF;
    font-size: 25px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
`

export const NavbarIcon = styled.img`
    width: 50px;
    height: 50px;
    background-color: #000;
    border-radius: 50%;
    padding: 2px;
` 
