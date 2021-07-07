import {
    Title,
    SubTitle,
    Description,
    DarkBlueButton,
    Link
  } from '../../components/globalComponents'
  
  import {  
      PreservationContainer,
      PreservationSection  
  } from './styles'
  

  
function Preservacao() {
    return (  
        <PreservationContainer>
            <PreservationSection>
            <Title>Preservação Digital</Title>
            <SubTitle>Preservamos dados por décadas</SubTitle>
            <br></br>
            <Description>
            O foco da preservação digital são "pacotes de dados" 
            cedidos ao domínio público por um fornecedor de dados primários, que
            detém o direito de licenciar dados espaciais. Os dados de interesse do 
            Instituto AddressForAll são eleitos através de uma curadoria e submetidos a 
            um processo de convite e seleção. Para detalhes técnicos consulte a documentação:
            </Description>
            <Link href='https://github.com/AddressForAll/digital-preservation'>git.AddressForAll.org/digital-preservation</Link>
            <Description>
            O Projeto Digital Preservation é mantido publicamente em neste mesmo 
            repositório. 
            </Description>
            <Description>
            As curadorias locais de cada pais são soberanas nas suas 
            decisões, em geral, seguindo de perto ou tendo participação efetiva de membros da 
            comunidade OpenStreetMap do país. Cada curadoria local tem autonomia de governança, 
            cumprindo, como entidade federada, as diretivas gerais do Projeto. 
            </Description>
            <Description>
            Por exemplo a Curadoria Brasil 
            gerencia seu próprio repositório em:
            </Description>

            <Link href='https://git.AddressForAll.org/digital-preservation-BR'>git.AddressForAll.org/digital-preservation-BR</Link>
            <Description>
            O projeto de Código de Roteamento Postal 
            contorna legalmente esta incoerência. 
            </Description>
            <Link href='https://git.AddressForAll.org/digital-preservation-BR'>git.AddressForAll.org/digital-preservation-BR</Link>
          
            <Description>
                Para detalhes técnicos consulte a documentação:
            </Description>
                <Link href='https://api-test.AddressForAll.org/v1.htm/vw_core/donor/BR'>
                api-test.AddressForAll.org/v1.htm/vw_core/donor/BR

                </Link>  
        </PreservationSection>
        </PreservationContainer>
    );
}
export default Preservacao;