import {
    NavbarAnchor,
    NavbarContainer,
    NavbarContent,
    NavbarIcon,
    NavbarIconContainer,
    NavbarLanguage,
    NavbarLanguageContainer,
    NavbarLogo,
    NavbarMenu} from './style'

function Navbar() {
  return (    
    <NavbarContainer>
        <NavbarLogo></NavbarLogo>
        <NavbarContent>
            <NavbarMenu>
                <NavbarAnchor>Quem somos</NavbarAnchor>
                <NavbarAnchor>Dados</NavbarAnchor>
                <NavbarAnchor>API</NavbarAnchor>
                <NavbarAnchor>Contato</NavbarAnchor>
            </NavbarMenu>
            <NavbarIconContainer>
                <NavbarIcon>icone</NavbarIcon>
                <NavbarIcon>icone</NavbarIcon>
            </NavbarIconContainer>
            <NavbarLanguageContainer>
                <NavbarLanguage>BR</NavbarLanguage>
            </NavbarLanguageContainer>
        </NavbarContent>
    </NavbarContainer>
  );
}

export default Navbar;
