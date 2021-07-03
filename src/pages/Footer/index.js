import {FooterContainer,FooterContent,FooterLink,FooterLogo,SiteMapColumn,SiteMapContainer} from './styles'

function Footer() {
  return (    
    <FooterContainer>
        <FooterContent>
            <FooterLogo></FooterLogo>
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
