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
    ContactUsContainer,
    ContactUsSection,
    ContactUsNetworkImg} from './style'

  import logo from '../../assets/images/logo.png'
  
  function Contato() {
    return (  
        <ContactUsContainer>
            <ContactUsSection>
                <Title>
                    Contato
                </Title>
                <Description>
                Contamos com a ajuda de todos os atores que 
                tiverem dados relevantes para os objetivos do Instituto, 
                se você tiver como ajudar entre em contato!
                </Description>
            </ContactUsSection>            

            <ContactSection buttonText="Enviar" description ="Escreva sua mensagem e não esqueça de deixar um contato!" buttonType="Light"></ContactSection>

            <ContactUsSection>
                <SubTitle>
                    Encontre-nos
                </SubTitle>
                <br></br>
                <Description>
                Av. Paulista, 171 - 4º andar - Bela Vista - São Paulo – SP – Brasil - 01311-904
                </Description>                
                <Link>contato@addressforall.org</Link>
            </ContactUsSection>
            <ContactUsSection>
                <SubTitle>Encontre-nos</SubTitle>
                <Description>Nos esforçamos para construir uma rede sólida em 
                    busca do livre acesso a dados geográficos!</Description>
            </ContactUsSection>
            <ContactUsSection>
                <Carousel itemsToShow={4} pagination={false} style={{marginTop:'30px'}}>
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
  