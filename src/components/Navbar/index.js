import {
    NavbarAnchor,
    NavbarContainer,
    NavbarContent,
    NavbarIcon,
    NavbarLogo,
} from './style'

import logo from '../../assets/images/logo.png'
import git from '../../assets/images/git.png'
import dadosabertos from '../../assets/images/dadosabertos.png'

function Navbar() {
  return (    
    <NavbarContainer>
        <NavbarContent>
            <NavbarLogo src={logo} alt={'Address for all'}/>
            <NavbarAnchor>Quem somos</NavbarAnchor>
            <NavbarAnchor>Dados</NavbarAnchor>
            <NavbarAnchor>API</NavbarAnchor>
            <NavbarAnchor>Contato</NavbarAnchor>   
            <NavbarIcon src={git} alt={'Github'}/>
            <NavbarIcon src={dadosabertos} alt={'Dados abertos'}/>
            <NavbarAnchor>BR</NavbarAnchor>
        </NavbarContent>
    </NavbarContainer>
  );
}

export default Navbar;
