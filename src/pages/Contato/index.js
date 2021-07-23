import React, {useState,useEffect} from 'react'
import Carousel from 'react-elastic-carousel'

import {useLanguage} from '../../context/language';
import {useLanguageState} from '../../context/languageState';
import WindowDimensions from '../../utils/WindowDimensions';
import {
    Title,
    SubTitle,
    Description,
    Link
} from '../../components/globalComponents'
  
import ContactSection from '../../components/ContactSection'; 
import {
    ContactUsContainer,
    ContactUsSection,
    ContactUsNetworkImg
} from './style'

  import logo from '../../assets/images/logo.png'
  
  function Contato() {

    const {language} = useLanguage();
    const {languageState} = useLanguageState();
    const { width } = WindowDimensions();

    const [carouselQuant,setCarouselQuant] = useState(4);
  
    useEffect(()=>{
        if(width<960){
          setCarouselQuant(1);
        };
      },[width]);

    return (  
        <ContactUsContainer>
            <ContactUsSection>
                <Title>
                    {languageState[language].contato.title}
                </Title>
                <Description>
                    {languageState[language].contato.descriptionTitle}
                </Description>
            </ContactUsSection>            

            <ContactSection buttonText={languageState[language].contato.button} description ={languageState[language].contato.textArea} buttonType="Light"></ContactSection>

            <ContactUsSection>
                <SubTitle>
                    {languageState[language].contato.subTitle1}
                </SubTitle>
                <br></br>
                <Description>
                    {languageState[language].contato.description1A}
                </Description>     
                <Description>
                    {languageState[language].contato.description1B}
                </Description>            
                <Link>contato@addressforall.org</Link>
                <SubTitle>{languageState[language].contato.subTitle2}</SubTitle>
                <Description>
                    {languageState[language].contato.description2}
                </Description>
                <Carousel itemsToShow={carouselQuant} pagination={false} style={{marginTop:'30px'}}>
                   <ContactUsNetworkImg src={logo}></ContactUsNetworkImg>
                   <ContactUsNetworkImg src={logo}></ContactUsNetworkImg>
                   <ContactUsNetworkImg src={logo}></ContactUsNetworkImg>
                   <ContactUsNetworkImg src={logo}></ContactUsNetworkImg>         
                   <ContactUsNetworkImg src={logo}></ContactUsNetworkImg>                   
                </Carousel>           
            </ContactUsSection>
                        
        </ContactUsContainer>
    );
  }
  
  export default Contato;
  