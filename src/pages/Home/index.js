import React from 'react';

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
  Play,
  PictureContainer,
  Picture,
  LocationsSection,
  LocationsContainer,
  Location,
  Newsletter
} from './styles'

import Division from '../../components/Division'

import player from '../../assets/images/player.png'
import ilustracao01 from '../../assets/images/ilustracao01.png'
import ilustracao02 from '../../assets/images/ilustracao02.png'
import ilustracao03 from '../../assets/images/ilustracao03.png'

function Home() {

  const {language} = useLanguage();
  const {languageState} = useLanguageState();

  return (  
    <PageBodyContainer> 
      <HomeSection>
        <div style={{flex:1, display:'flex', flexDirection: 'column', justifyContent: 'space-around',height:'100%'}}>
          <Title>{languageState[language].homepage.title}</Title>
          <Description>{languageState[language].homepage.descriptionTitle}</Description>
          <DarkBlueButton>{languageState[language].homepage.button1}</DarkBlueButton>
        </div>
        <div style={{flex:1}}>
          <Play src={player} alt={'Vídeo'}/>
        </div>
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

      <Division description={languageState[language].homepage.divison1} buttonText={languageState[language].homepage.divisonButon1} buttonType={'Light'}/>
      <HomeSection></HomeSection>
      <Division description={languageState[language].homepage.divison2} buttonText={languageState[language].homepage.divisonButon2} buttonType={'Light'}/>

      <HomeSection>
        <Newsletter>{languageState[language].homepage.newsletter}</Newsletter>
      </HomeSection>

    </PageBodyContainer> 
  );
}

export default Home;
