import styled from 'styled-components'

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0B64E1;   
  height: 80px;
  font-size: 1.2rem;
  @media screen and (max-width: 960px) {        
    width: 100vw;
    background-color: #0B64E1;   

  }

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
  transform: translateX(-50px);
    
`

export const NavbarContent = styled.div`

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
    margin-left: 1rem;
    cursor: pointer;
` 
export const NavbarLinkIconWrapper = styled.div`

`

export const LanguageSelect = styled.select`
    background-color: #0B64E1;
    font-size: 20px;
    font-weight: 500;
    color:#fff;
    margin-right:5rem;
    transform: translateY(-2px);
    border:none;
    :hover{
    background-color: #1888ff;
    border-radius: 2px;
    transition: all 0.2s ease-out;
    
  }
  @media screen and (max-width: 960px) {        
        position: absolute;
        display: block;
        transform: translate(40vw,-50vh);
        font-size: 2rem;
        cursor: pointer;
        

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
        display: flex;
        align-items: center;
        justify-content: center;  
        top: 0;
        right: 0;
        font-size: 2rem;
        cursor: pointer;
        
    }
`
export const NavBarBurguer = styled.i`

`;
export const NavbarMenu = styled.div`
    display: flex;
    flex-direction: rows;
    justify-content :space-space-around ;
  @media screen and (max-width: 960px) {
    
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: -100%;
        opacity: 1;
        transition: all 0.5s ease;
        align-items: center;
        justify-content: center;

    &.active {
        background: #0B64E1;
        left: 0;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 1;
    }

  
}
`
export const NavbarMaterialIcon  = styled.div`
  @media screen and (max-width: 960px) {    
    display: none;
  }
`;
export const NavbarIcons = styled.div`
  display: flex;
  align-items: center; 
  width: 200px;
  height: 80px;

  @media screen and (max-width: 960px) {
    transform: translateX(-10PX);
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