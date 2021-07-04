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
  Newsletter,
  WhoWeAreSection
} from './styles'

import Division from '../../components/Division'
import Footer from '../../components/Footer'


import player from '../../assets/images/player.png'

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
      </WhoWeAreSection>
      
      <WhoWeAreSection>
        <Title>CARROÇA</Title>
        <SubTitle>Diretoria Executiva</SubTitle>
        <br></br>
        <Description>Associados efetivos eleitos.</Description>
      </WhoWeAreSection>
      
      <WhoWeAreSection>
        <Title>CARROÇA</Title>
        <SubTitle>Conselho Técnico</SubTitle>
        <br></br>
        <Description>Associados e terceiros atuando como corpo técnico do Instituto.</Description>
      </WhoWeAreSection>
      
      <WhoWeAreSection>
        <Title>CARROÇA</Title>
        <SubTitle>Parceiros</SubTitle>
      </WhoWeAreSection>
      
      <Title>CARROÇA</Title>

      <Division description={'No link abaixo você pode consultar uma versão resumida de nosso estatuto social, bem como acessar as diversas versões de nosso estatuto em inteiro teor.'} buttonText={'Página do Estatuto'} buttonType={'Light'}/>
      <WhoWeAreSection>
        <SubTitle>Nossos Projetos</SubTitle>
        <br></br>
        <Description>Associados e terceiros atuando como corpo técnico do Instituto.</Description>
      </WhoWeAreSection>

      
    </PageBodyContainer> 
  );
}

export default QuemSomos;


