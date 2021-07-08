import {
    Title,
    SubTitle,
    Description,
    Link,
    DarkBlueButton
  } from '../../components/globalComponents'
  
  import {  
    StatuteContainer,
    StatuteSection  
  } from './styles'
  


  function PerguntasFrequentes() {
    return (  
        <StatuteContainer>
            <StatuteSection>
            <Title>Estatuto</Title>
            <br></br>            
            <Description>           
            Incorporar código HTML disponível em:
            </Description>                    
            <Link href="addressforall.org/estatuto">addressforall.org/estatuto</Link>  
        </StatuteSection>
        </StatuteContainer>
    );
}
export default PerguntasFrequentes;