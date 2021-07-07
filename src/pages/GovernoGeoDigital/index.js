import {
    Title,
    SubTitle,
    Description,
    DarkBlueButton,
    Link
  } from '../../components/globalComponents'
  
  import {  
    GeoDigitalContainer,
    GeoDigitalSection  
  } from './styles'
  

  
function GovernoGeoDigital() {
    return (  
        <GeoDigitalContainer>
            <GeoDigitalSection>
            <Title>Governo GeoDigital</Title>
            <br></br>
            <SubTitle>A importância da geografia no governo</SubTitle>
            <br></br>
            <Description>
            Os governos estão conscientes da importância da digitalização dos seus 
            serviços, entretanto a cultura de geolocalização é ainda pouco difundida. 
            Todo mundo se encanta quando vê dados e análises num mapa, mas os gestores, 
            muitas vezes, não sabem nem por onde começar para que isto aconteça. 
            O projeto de Governo GeoDigital objetiva conscientizar os governos da 
            importância da geografia nos serviços públicos assim como apontar os caminhos 
            concretos de como implementá-la e se aproveitar dela.

            </Description>
            <Description>
            As iniciativas de Governo GeoDigital 
            são gerenciadas debaixo da marca do Instituto de Tecnologias Geo-Socias. Para mais detalhes 
            acesse:
            </Description>            

            <Link href="https://itgs.org.br">itgs.org.br</Link>  
        </GeoDigitalSection>
        </GeoDigitalContainer>
    );
}
export default GovernoGeoDigital;