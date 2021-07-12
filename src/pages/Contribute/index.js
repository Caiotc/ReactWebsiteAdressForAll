import Carousel from 'react-elastic-carousel'

import {useLanguage} from '../../context/language';
import {useLanguageState} from '../../context/languageState';

import {
    Title,
    SubTitle,
    Description,
    Link,
  } from '../../components/globalComponents'
  
  import ContactSection from '../../components/ContactSection'; 
  import {
    ContributeContainer,
    ContributeSection,
    ContributeNetworkImg} from './styles'

  import logo from '../../assets/images/logo.png'
  
  function Contribute() {

    const {language} = useLanguage();
    const {languageState} = useLanguageState();

    return (  
        <ContributeContainer>
            <ContributeSection>
                <Title>
                    {languageState[language].contribua.title}
                </Title>
                <Description>
                    {languageState[language].contribua.descriptionTitle1}
                </Description>
                <Description>
                    {languageState[language].contribua.descriptionTitle2}
                </Description>
                <Description>
                    {languageState[language].contribua.descriptionTitle3}
                </Description>
            </ContributeSection>            

            <ContactSection 
            buttonText={languageState[language].contribua.button} 
            description ={languageState[language].contribua.textArea} 
            buttonType="Light"></ContactSection>

            <ContributeSection>
                <SubTitle>
                    {languageState[language].contribua.subTitle1}
                </SubTitle>
                <br></br>
                <Description>
                    {languageState[language].contribua.description1A}
                </Description>  
                <Description>
                    {languageState[language].contribua.description1B}
                </Description>              
                <Link>contato@addressforall.org</Link>
    
                <SubTitle>{languageState[language].contribua.subTitle2}</SubTitle>
                <Description>
                    {languageState[language].contribua.description2}
                </Description>
                <Carousel itemsToShow={4} pagination={false} style={{marginTop:'30px'}}>
                   <ContributeNetworkImg src={logo}></ContributeNetworkImg>
                   <ContributeNetworkImg src={logo}></ContributeNetworkImg>
                   <ContributeNetworkImg src={logo}></ContributeNetworkImg>
                   <ContributeNetworkImg src={logo}></ContributeNetworkImg>   
                   <ContributeNetworkImg src={logo}></ContributeNetworkImg>                   
                </Carousel>
            </ContributeSection>
                        
        </ContributeContainer>
    );
  }
  
  export default Contribute;
  