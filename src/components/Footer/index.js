import {FooterContainer,FooterContent,LogoContainer,Logo,FooterLink,SiteMapColumn,SiteMapContainer} from './styles'

import logo from '../../assets/images/logo.png'

function Footer() {
  return (    
    <FooterContainer>
        <FooterContent>
            <LogoContainer>
                <Logo src={logo} alt={'Address for all'}/>
            </LogoContainer>
            <SiteMapContainer>
                <SiteMapColumn>
                    <FooterLink>Quem Somos</FooterLink>
                    <br></br>
                    <FooterLink>Estatuto</FooterLink>
                </SiteMapColumn>
                <SiteMapColumn>
                    <FooterLink>Dados</FooterLink>
                    <br></br>
                    <FooterLink>API</FooterLink>
                </SiteMapColumn>
                <SiteMapColumn>
                    <FooterLink>Contato</FooterLink>
                    <br></br>
                    <FooterLink>FAQ</FooterLink>
                </SiteMapColumn>
            </SiteMapContainer>
        </FooterContent>
    </FooterContainer>
 
  );
}

export default Footer;
