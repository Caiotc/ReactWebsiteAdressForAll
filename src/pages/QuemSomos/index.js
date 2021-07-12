import {useLanguage} from '../../context/language';
import {useLanguageState} from '../../context/languageState';

import Carousel from 'react-elastic-carousel'

import {
  Title,
  SubTitle,
  Description,
} from '../../components/globalComponents'

import {
  PageBodyContainer,
  WhoWeAreSection,
  ImgContainer,
  MemberImg,
  PartnerImg,
  ProjectCardsContainer,
  ProjectCard,
  ProjectImg,
  ProjectTitle,
  ProjectDescription,
  ProjectButton
} from './styles'

import Division from '../../components/Division'

import logo from '../../assets/images/logo.png'



function QuemSomos() {

  const {language} = useLanguage();
  const {languageState} = useLanguageState();
  
  return (  
    <PageBodyContainer> 
      
      <WhoWeAreSection>
        <Title>{languageState[language].quemsomos.title}</Title>
        <br></br>
        <Description>
          {languageState[language].quemsomos.descriptionTitle}
        </Description>
      </WhoWeAreSection>
      
      <WhoWeAreSection>      
        <SubTitle>{languageState[language].quemsomos.subTitle1}</SubTitle>
        <br></br>
        <Description>
          {languageState[language].quemsomos.description1A}
        </Description>
        <Description>
          {languageState[language].quemsomos.description1B}
        </Description>
      </WhoWeAreSection>
      
      <WhoWeAreSection>
        <SubTitle>{languageState[language].quemsomos.subTitle2}</SubTitle>
        <br></br>
        <Description>
          {languageState[language].quemsomos.description2}
        </Description>
      </WhoWeAreSection>
      
      <WhoWeAreSection>
        <SubTitle>{languageState[language].quemsomos.subTitle3}</SubTitle>
        <br></br>
        <Description>
          {languageState[language].quemsomos.description3}
        </Description>
      <ImgContainer>
          <MemberImg src={logo} alt={'Diretoria'}/>
          <MemberImg src={logo} alt={'Diretoria'}/>
          <MemberImg src={logo} alt={'Diretoria'}/>
          <MemberImg src={logo} alt={'Diretoria'}/>
          <MemberImg src={logo} alt={'Diretoria'}/>
        </ImgContainer>
      </WhoWeAreSection>
      
      <WhoWeAreSection>
        <SubTitle>{languageState[language].quemsomos.subTitle4}</SubTitle>
        <br></br>
        <Description>
          {languageState[language].quemsomos.description4}
        </Description>
        <ImgContainer>
          <MemberImg src={logo} alt={'Diretoria'}/>
          <MemberImg src={logo} alt={'Diretoria'}/>
          <MemberImg src={logo} alt={'Diretoria'}/>
        </ImgContainer>
      </WhoWeAreSection>
      
      <WhoWeAreSection>
        <SubTitle>{languageState[language].quemsomos.subTitle5}</SubTitle>
        <br></br>
        <Description>
          {languageState[language].quemsomos.description5}
        </Description>
        <ImgContainer>
          <MemberImg src={logo} alt={'Diretoria'}/>
          <MemberImg src={logo} alt={'Diretoria'}/>
          <MemberImg src={logo} alt={'Diretoria'}/>
          <MemberImg src={logo} alt={'Diretoria'}/>
          <MemberImg src={logo} alt={'Diretoria'}/>
        </ImgContainer>
      </WhoWeAreSection>
      
      <WhoWeAreSection>
        <SubTitle>{languageState[language].quemsomos.subTitle6}</SubTitle>
        <Carousel itemsToShow={4} pagination={false} style={{marginTop:'30px'}}>
          <PartnerImg src={logo} alt={'Parceiro'}/>
          <PartnerImg src={logo} alt={'Parceiro'}/>
          <PartnerImg src={logo} alt={'Parceiro'}/>
          <PartnerImg src={logo} alt={'Parceiro'}/>
          <PartnerImg src={logo} alt={'Parceiro'}/>
        </Carousel>
      </WhoWeAreSection>
      

      <Division description={languageState[language].quemsomos.divison1} buttonText={languageState[language].quemsomos.divisonButon1} buttonType={'LightLink'} to={'/estatuto'} />
      <WhoWeAreSection>
        <SubTitle>{languageState[language].quemsomos.subTitle7}</SubTitle>
        <br></br>
        <Description>
          {languageState[language].quemsomos.description7}
        </Description>
        <ProjectCardsContainer>
          <ProjectCard>
            <ProjectImg src={logo} alt={'Parceiro'}/>
            <ProjectTitle>{languageState[language].quemsomos.project1Title}</ProjectTitle>
            <ProjectDescription>{languageState[language].quemsomos.project1Description}</ProjectDescription>
            <ProjectButton href={'/'}>{languageState[language].quemsomos.project1Button}</ProjectButton>
          </ProjectCard>
          <ProjectCard>
            <ProjectImg src={logo} alt={'Parceiro'}/>
            <ProjectTitle>{languageState[language].quemsomos.project2Title}</ProjectTitle>
            <ProjectDescription>{languageState[language].quemsomos.project2Description}</ProjectDescription>
            <ProjectButton href={'#'}>{languageState[language].quemsomos.project2Button}</ProjectButton>
          </ProjectCard>
          <ProjectCard>
              <ProjectImg src={logo} alt={'Parceiro'}/>
              <ProjectTitle>{languageState[language].quemsomos.project3Title}</ProjectTitle>
            <ProjectDescription>{languageState[language].quemsomos.project3Description}</ProjectDescription>
            <ProjectButton href={'#'}>{languageState[language].quemsomos.project3Button}</ProjectButton>
          </ProjectCard>
          <ProjectCard>
            <ProjectImg src={logo} alt={'Parceiro'}/>
            <ProjectTitle>{languageState[language].quemsomos.project4Title}</ProjectTitle>
            <ProjectDescription>{languageState[language].quemsomos.project4Description}</ProjectDescription>
            <ProjectButton href={'#'}>{languageState[language].quemsomos.project4Button}</ProjectButton>
          </ProjectCard>
          <ProjectCard>
            <ProjectImg src={logo} alt={'Parceiro'}/>
            <ProjectTitle>{languageState[language].quemsomos.project5Title}</ProjectTitle>
            <ProjectDescription>{languageState[language].quemsomos.project5Description}</ProjectDescription>
            <ProjectButton href={'#'}>{languageState[language].quemsomos.project5Button}</ProjectButton>
          </ProjectCard>
        </ProjectCardsContainer>
      </WhoWeAreSection>

      
    </PageBodyContainer> 
  );
}

export default QuemSomos;


