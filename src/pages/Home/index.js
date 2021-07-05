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
  return (  
    <PageBodyContainer> 
      <HomeSection>
        <div style={{flex:1, display:'flex', flexDirection: 'column', justifyContent: 'space-around',height:'100%'}}>
          <Title>AddressForAll</Title>
          <Description>Para que os serviços cheguem ao lugar certo, endereços são uma questão de soberania para qualquer país.</Description>
          <DarkBlueButton>Assistir ao Vídeo</DarkBlueButton>
        </div>
        <div style={{flex:1}}>
          <Play src={player} alt={'Vídeo'}/>
        </div>
      </HomeSection>
      
      <LocationsSection>
        <LocationsContainer>
          <Location> Brasil </Location>
          <Location> Belo Horizonte </Location>
          <Location> Digite um texto </Location>
        </LocationsContainer>
      </LocationsSection>

      <HomeSection>
        <PictureContainer>
          <Picture src={ilustracao01} alt={'ilustracao01'}/>
        </PictureContainer>
        <div style={{flex:1, display:'flex', flexDirection: 'column', justifyContent: 'space-evenly',height:'100%'}}>
          <SubTitle>Endereços Importam!</SubTitle>
          <Description>Não saber onde está um endereço pode custar Tempo, Vidas, Combustível, Retrabalho...</Description>
        </div>
      </HomeSection>

      <HomeSection>
        <div style={{flex:1, display:'flex', flexDirection: 'column', justifyContent: 'space-evenly',height:'100%'}}>
          <SubTitle>Problema: BDs separados!</SubTitle>
          <Description>Prefeituras, concessionárias, empresas de logística, melhoram seus bancos de dados de endereços, mas cada um mantem a sua base de dados isolada da base dos outros.</Description>
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
          <SubTitle>Vamos Colaborar!</SubTitle>
          <Description>É por isto que o Instituo AddressForAll foi criado. O projeto convida todos a participar do esforço e a colocar seus endereços num banco de dados único, de domínio público, colaborativo, que todos podem consultar e baixar gratuitamente.</Description>
        </div>
      </HomeSection>

      <Division description={'O instituto de Teconologia Geo-Sociais AddressForAll tem por objetivo a defesa dos dados abertos e da melhoria social através do bom uso da tecnologia com ênfase nas tecnologias geo-espaciais.'} buttonText={'Quem Somos'} buttonType={'Light'}/>

      <HomeSection>
        <Newsletter>Assine nossa newsletter</Newsletter>
      </HomeSection>

    </PageBodyContainer> 
  );
}

export default Home;
