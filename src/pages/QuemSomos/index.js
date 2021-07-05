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
  ProjectCardContent,
  ProjectImg,
  ProjectTitle,
  ProjectDescription,
  ProjectButton
} from './styles'

import Division from '../../components/Division'

import logo from '../../assets/images/logo.png'



function QuemSomos() {
  return (  
    <PageBodyContainer> 
      
      <WhoWeAreSection>
        <Title>Quem Somos?</Title>
        <br></br>
        <Description>O instituto de Teconologia Geo-Sociais AddressForAlL tem por objetivo a defesa dos dados abertos e da melhoria social através do bom uso da tecnologia com ênfase nas tecnologias geo-espaciais.</Description>
      </WhoWeAreSection>
      
      <WhoWeAreSection>      
        <SubTitle>Histórico</SubTitle>
        <br></br>
        <Description>Como parte do seu trabalho no apoio do projeto de mapa colaborativo OpenStreetMap, durante 3 anos, os fundadores do Instituto tentaram motivar o governo Brasileiro a criar uma base de dados de endereços aberta e colaborativa no Brasil.</Description>
        <Description>Vendo que o projeto não passava da ideação, devido à falta de vontade ou força política, Thierry Jean, Filipe Rocha e Peter Krauss decidiram lançar o projeto "Endereço para todos" em 2020 no âmbito de uma associação sem fins lucrativos chamada "Instituto de Tecnologias Geo-Sociais AddressForAll".</Description>      
      </WhoWeAreSection>
      
      <WhoWeAreSection>
        <SubTitle>Evolução</SubTitle>
        <br></br>
        <Description>A criação do Instituto permitiu aos seus criadores de juntar debaixo de um mesmo guarda-chuva legal alguns projetos de pesquisas e de melhoria social, sempre com uso forte de geolocalização.</Description>      
      </WhoWeAreSection>
      
      <WhoWeAreSection>
        <SubTitle>Conselho Consultivo</SubTitle>
        <br></br>
      <Description>O Conselho consultivo é constituído por membros efetivos e honorários de notória competência e reputação em suas áreas, e norteia a atuação do Instituto.</Description>      
      <ImgContainer>
          <MemberImg src={logo} alt={'Diretoria'}/>
          <MemberImg src={logo} alt={'Diretoria'}/>
          <MemberImg src={logo} alt={'Diretoria'}/>
          <MemberImg src={logo} alt={'Diretoria'}/>
          <MemberImg src={logo} alt={'Diretoria'}/>
        </ImgContainer>
      </WhoWeAreSection>
      
      <WhoWeAreSection>
        <SubTitle>Diretoria Executiva</SubTitle>
        <br></br>
        <Description>Associados efetivos eleitos.</Description>
        <ImgContainer>
          <MemberImg src={logo} alt={'Diretoria'}/>
          <MemberImg src={logo} alt={'Diretoria'}/>
          <MemberImg src={logo} alt={'Diretoria'}/>
        </ImgContainer>
      </WhoWeAreSection>
      
      <WhoWeAreSection>
        <SubTitle>Conselho Técnico</SubTitle>
        <br></br>
        <Description>Associados e terceiros atuando como corpo técnico do Instituto.</Description>
        <ImgContainer>
          <MemberImg src={logo} alt={'Diretoria'}/>
          <MemberImg src={logo} alt={'Diretoria'}/>
          <MemberImg src={logo} alt={'Diretoria'}/>
          <MemberImg src={logo} alt={'Diretoria'}/>
          <MemberImg src={logo} alt={'Diretoria'}/>
        </ImgContainer>
      </WhoWeAreSection>
      
      <WhoWeAreSection>
        <SubTitle>Parceiros</SubTitle>
        <Carousel itemsToShow={4} pagination={false} style={{marginTop:'30px'}}>
          <PartnerImg src={logo} alt={'Parceiro'}/>
          <PartnerImg src={logo} alt={'Parceiro'}/>
          <PartnerImg src={logo} alt={'Parceiro'}/>
          <PartnerImg src={logo} alt={'Parceiro'}/>
          <PartnerImg src={logo} alt={'Parceiro'}/>
        </Carousel>
      </WhoWeAreSection>
      

      <Division description={'No link abaixo você pode consultar uma versão resumida de nosso estatuto social, bem como acessar as diversas versões de nosso estatuto em inteiro teor.'} buttonText={'Página do Estatuto'} buttonType={'Light'}/>
      <WhoWeAreSection>
        <SubTitle>Nossos Projetos</SubTitle>
        <br></br>
        <Description>o Projeto AddressForAll é um dos vários projetos mantidos pelo Instituto. Confira abaixo os projetos ligados a endereços.</Description>
        <ProjectCardsContainer>
          <ProjectCard>
            <ProjectImg src={logo} alt={'Parceiro'}/>
            <ProjectTitle>AddressForAll - Endereço para Todos</ProjectTitle>
            <ProjectDescription>Este foi o primeiro projeto do instituto. O projeto mantém uma base de endereços colaborativa e aberta.</ProjectDescription>
            <ProjectButton href={'#'}>Voltar para Homepage</ProjectButton>
          </ProjectCard>
          <ProjectCard>
            <ProjectImg src={logo} alt={'Parceiro'}/>
            <ProjectTitle>CRP - Código de Roteamento Postal</ProjectTitle>
            <ProjectDescription>O CEP é privado? O CRP contorna legalmente esta incoerência.</ProjectDescription>
            <ProjectButton href={'#'}>Voltar para Homepage</ProjectButton>
          </ProjectCard>
          <ProjectCard>
              <ProjectImg src={logo} alt={'Parceiro'}/>
              <ProjectTitle>OSM.code - Localização por Geocódigos</ProjectTitle>
              <ProjectDescription>Seres humanos tem dificuldade em decorar latitude/longitude. O Geocode cria um código curto, fácil de lembrar para apontar uma área de 4M X 4M.</ProjectDescription>
              <ProjectButton href={'#'}>Voltar para Homepage</ProjectButton>
          </ProjectCard>
          <ProjectCard>
            <ProjectImg src={logo} alt={'Parceiro'}/>
            <ProjectTitle>Preservação Digital</ProjectTitle>
            <ProjectDescription>Preservarmos por décadas dados que governos perdem facilmente.</ProjectDescription>
            <ProjectButton href={'#'}>Voltar para Homepage</ProjectButton>
          </ProjectCard>
          <ProjectCard>
            <ProjectImg src={logo} alt={'Parceiro'}/>
            <ProjectTitle>Governo GeoDigital</ProjectTitle>
            <ProjectDescription>Conscientizar os governos da importância da geografia nos serviços digitais e ajuda-los.</ProjectDescription>
            <ProjectButton href={'#'}>Voltar para Homepage</ProjectButton>
          </ProjectCard>
        </ProjectCardsContainer>
      </WhoWeAreSection>

      
    </PageBodyContainer> 
  );
}

export default QuemSomos;


