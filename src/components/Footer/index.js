import {FooterContainer,FooterContent,LogoContainer,Logo,FooterLink,SiteMapColumn,SiteMapContainer} from './styles'

import {useLanguage} from '../../context/language';
import {useLanguageState} from '../../context/languageState';

import logo from '../../assets/images/logo.png'

function Footer() {
    const {language} = useLanguage();
    const {languageState} = useLanguageState();

    return (    
    <FooterContainer>
        <FooterContent>
            <LogoContainer>
                <Logo src={logo} alt={'Address for all'}/>
            </LogoContainer>
            <SiteMapContainer>
                <SiteMapColumn>
                    <FooterLink href={'/quem-somos'}>{languageState[language].footer.link1}</FooterLink>
                    <br></br>
                    <FooterLink href={'/estatuto'}>{languageState[language].footer.link2}</FooterLink>
                </SiteMapColumn>
                <SiteMapColumn>
                    <FooterLink href={'/dados'}>{languageState[language].footer.link3}</FooterLink>
                    <br></br>
                    <FooterLink href={'/api-hub'}>{languageState[language].footer.link4}</FooterLink>
                </SiteMapColumn>
                <SiteMapColumn>
                    <FooterLink href={'/contato'}>{languageState[language].footer.link5}</FooterLink>
                    <br></br>
                    <FooterLink href={'/perguntas-frequentes'}>{languageState[language].footer.link6}</FooterLink>
                </SiteMapColumn>
            </SiteMapContainer>
        </FooterContent>
    </FooterContainer>

    );
}

export default Footer;
