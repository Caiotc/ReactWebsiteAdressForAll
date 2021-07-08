import Carousel from 'react-elastic-carousel'

import {
    Title,
    SubTitle,
    Description,
    Link,
    DarkBlueButton
  } from '../../components/globalComponents'
  
  import ContactSection from '../../components/ContactSection'; 
  import {
    ContributeContainer,
    ContributeSection,
    ContributeNetworkImg} from './styles'

  import logo from '../../assets/images/logo.png'
  
  function Contribute() {
    return (  
        <ContributeContainer>
            <ContributeSection>
                <Title>
                    Contato
                </Title>
                <br></br>
                <Description>
                O Instituto AddressForAll conta com a colaboração de todos. Se sua empresa ou o órgão do governo d
                o qual você participa, tem dados relevantes, entre em contato. Mesmo se você considerar os dados pouco 
                confiáveis, no momento de cruza-los com outros dados, estes podem ajudar muito na qualidade final do trabalho.
                </Description>
                <Description>
                Dados cedidos não precisam necessariamente ser de endereços. Ao recebermos Ortofotos ou arquivos de mapas 
                completos, procuraremos disponibilizar estes dados para a comunidade OpenStreetMap para facilitar seu trabalho de mapear 
                o mundo.
                </Description>
                <Description>
                Se quiser ser Embaixador do projeto AddressForAll na sua região ou no seu setor de atividade, tem muito que você pode fazer para nos ajudar a constituir uma excelente base aberta de endereços.
                </Description>
            </ContributeSection>            

            <ContactSection buttonText="Enviar" description ="Escreva sua mensagem e não esqueça de deixar um contato!" buttonType="Light"></ContactSection>

            <ContributeSection>
                <SubTitle>
                    Encontre-nos
                </SubTitle>
                <br></br>
                <Description>
                Av. Paulista, 171 - 4º andar - Bela Vista - São Paulo – SP – Brasil - 01311-904
                </Description>                
                <Link>contato@addressforall.org</Link>
 
    
                <SubTitle>Encontre-nos</SubTitle>
                <Description>Nos esforçamos para construir uma rede sólida em 
                    busca do livre acesso a dados geográficos!</Description>
                <Carousel itemsToShow={4} pagination={false} style={{marginTop:'30px'}}>
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
  