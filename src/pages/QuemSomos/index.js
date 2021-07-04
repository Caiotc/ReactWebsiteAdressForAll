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
import Footer from '../../components/Footer'


import player from '../../assets/images/player.png'

function QuemSomos() {
  return (  
    <PageBodyContainer> 
      <Title>Quem Somos?</Title>
      <Description>O instituto de Teconologia Geo-Sociais AddressForAlL tem por objetivo a defesa dos dados abertos e da melhoria social através do bom uso da tecnologia com ênfase nas tecnologias geo-espaciais.</Description>
      <SubTitle>Histórico</SubTitle>
      <Description>Como parte do seu trabalho no apoio do projeto de mapa colaborativo OpenStreetMap, durante 3 anos, os fundadores do Instituto tentaram motivar o governo Brasileiro a criar uma base de dados de endereços aberta e colaborativa no Brasil.</Description>
      <Description>Vendo que o projeto não passava da ideação, devido à falta de vontade ou força política, Thierry Jean, Filipe Rocha e Peter Krauss decidiram lançar o projeto "Endereço para todos" em 2020 no âmbito de uma associação sem fins lucrativos chamada "Instituto de Tecnologias Geo-Sociais AddressForAll".</Description>      
      <SubTitle>Evolução</SubTitle>
      <Description>A criação do Instituto permitiu aos seus criadores de juntar debaixo de um mesmo guarda-chuva legal alguns projetos de pesquisas e de melhoria social, sempre com uso forte de geolocalização.</Description>      
      <SubTitle>Conselho Consultivo</SubTitle>
      <Description>O Conselho consultivo é constituído por membros efetivos e honorários de notória competência e reputação em suas áreas, e norteia a atuação do Instituto.</Description>      
      <Title>CARROÇA</Title>
      <SubTitle>Diretoria Executiva</SubTitle>
      <Description>Associados efetivos eleitos.</Description>
      <Title>CARROÇA</Title>
      <SubTitle>Conselho Técnico</SubTitle>
      <Description>Associados e terceiros atuando como corpo técnico do Instituto.</Description>
      <Title>CARROÇA</Title>
      <SubTitle>Parceiros</SubTitle>
      <Title>CARROÇA</Title>

      <Division description={'No link abaixo você pode consultar uma versão resumida de nosso estatuto social, bem como acessar as diversas versões de nosso estatuto em inteiro teor.'} buttonText={'Página do Estatuto'} buttonType={'Light'}/>
      
      <SubTitle>Nossos Projetos</SubTitle>
      <Description>Associados e terceiros atuando como corpo técnico do Instituto.</Description>
      <Title>CARDS</Title>
      
    </PageBodyContainer> 
  );
}

export default QuemSomos;


