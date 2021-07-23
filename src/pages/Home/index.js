import React,{useState, useCallback} from 'react';

import {useLanguage} from '../../context/language';
import {useLanguageState} from '../../context/languageState';

import {
  Title,
  SubTitle,
  Description,
  DarkBlueButton
} from '../../components/globalComponents'

import {
  PageBodyContainer,
  HomeSection,
  SectionContent,
  Play,
  PictureContainer,
  Picture,
  LocationsSection,
  LocationsContainer,
  Location,
  Newsletter
} from './styles'

import Division from '../../components/Division'
import ModalGeneric from '../../components/ModalGeneric'


import player from '../../assets/images/player.png'
import ilustracao01 from '../../assets/images/ilustracao01.png'
import ilustracao02 from '../../assets/images/ilustracao02.png'
import ilustracao03 from '../../assets/images/ilustracao03.png'

function Home() {

  const {language} = useLanguage();
  const {languageState} = useLanguageState();
  
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = useCallback(()=>{
     setModalOpen(!modalOpen);
  },[modalOpen]);

  return (  
    <PageBodyContainer> 
      <ModalGeneric 
        isOpen={modalOpen} 
        setIsOpen={toggleModal} 
      >
        <iframe width="760" height="515" src="https://www.youtube.com/embed/WglOrCDKjeo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </ModalGeneric>
      <HomeSection>
        <SectionContent>
          <Title>{languageState[language].homepage.title}</Title>
          <Description>{languageState[language].homepage.descriptionTitle}</Description>
          <DarkBlueButton onClick={toggleModal}>{languageState[language].homepage.button1}</DarkBlueButton>
        </SectionContent>
        <SectionContent>
          <Play src={player} alt={'Vídeo'} onClick={toggleModal}/>
        </SectionContent>
      </HomeSection>
      
      <LocationsSection>
        <LocationsContainer>
          <Location>{languageState[language].homepage.location1}</Location>
          <Location>{languageState[language].homepage.location2}</Location>
          <Location>{languageState[language].homepage.location3}</Location>
        </LocationsContainer>
      </LocationsSection>

      <HomeSection>
        <PictureContainer>
          <Picture src={ilustracao01} alt={'ilustracao01'}/>
        </PictureContainer>
        <div style={{flex:1, display:'flex', flexDirection: 'column', justifyContent: 'space-evenly',height:'100%'}}>
          <SubTitle>{languageState[language].homepage.subTitle1}</SubTitle>
          <Description>{languageState[language].homepage.description1}</Description>
        </div>
      </HomeSection>

      <HomeSection>
        <div style={{flex:1, display:'flex', flexDirection: 'column', justifyContent: 'space-evenly',height:'100%'}}>
          <SubTitle>{languageState[language].homepage.subTitle2}</SubTitle>
          <Description>{languageState[language].homepage.description2}</Description>
        </div>
        <PictureContainer>
          <Picture src={ilustracao02} alt={'ilustracao02'}/>
        </PictureContainer>
      </HomeSection>

      <HomeSection>
        <PictureContainer>
          <Picture src={ilustracao03} alt={'ilustracao03'}/>
        </PictureContainer>
        <div style={{flex:1, display:'flex', flexDirection: 'column', justifyContent: 'space-evenly',height:'100%'}}>
          <SubTitle>{languageState[language].homepage.subTitle3}</SubTitle>
          <Description>{languageState[language].homepage.description3}</Description>
        </div>
      </HomeSection>

      <Division description={languageState[language].homepage.divison1} buttonText={languageState[language].homepage.divisonButon1} buttonType={'LightLink'} to={'/quem-somos'} />
      <HomeSection></HomeSection>
      <Division description={languageState[language].homepage.divison2} buttonText={languageState[language].homepage.divisonButon2} buttonType={'LightLink'} to={'/dados'} />

      <HomeSection>
        <Newsletter>{languageState[language].homepage.newsletter}</Newsletter>
      </HomeSection>

    </PageBodyContainer> 
  );
}

export default Home;
