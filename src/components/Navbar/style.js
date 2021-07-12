import styled from 'styled-components'

export const NavbarContainer = styled.div`

`;

export const NavbarLogo = styled.img`
    width: 80px;
    margin: 18px;    
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
`;
export const NavbarImgHolder = styled.div`
 
`

export const NavbarContent = styled.div`
    
    background-color: #0B64E1;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    
`;

export const NavbarAnchor = styled.a`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
`

export const NavbarIcon = styled.img`
    width: 30px;
    height: 30px;
    background-color: #000;
    border-radius: 50%;
    padding: 2px;
    margin-right: 2rem;
` 
export const NavbarLinkIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LanguageSelect = styled.select`
    background-color: #0B64E1;
    font-size: 25px;
    font-weight: 500;
    color:#fff;
    margin-right:5rem;
    border:none;
    :hover{
    background-color: #1888ff;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }
`

export const LanguageOption = styled.option`
    background-color: #fff;
    color:#000;
    display:flex;
    justify-content:center;
    align-items: center;
    margin: 20px;
`
export const BuguerMenu = styled.span`

`
export const NavbarMenuIcon = styled.div`
    display: none;
    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
export const NavbarMenu = styled.div`
    display: flex;
    flex-direction: rows;
    justify-content :space-space-around ;
  @media screen and (max-width: 960px) {
    
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: -100%;
        opacity: 1;
        transition: all 0.5s ease;
    

    &.active {
        background: #0B64E1;
        left: 0;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 1;
    }

  
}
`
export const NavbarItem = styled.li`
  display: flex;
  align-items: center;
  width: 200px;
  height: 80px;
  :hover{
    background-color: #1888ff;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }
  @media screen and (max-width: 960px) {


  }
`