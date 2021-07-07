import {
    Title,
    SubTitle,
    Description,
    DarkBlueButton,
    Link
  } from '../../components/globalComponents'
  
  import {  
      CRPContainer,
      CRPSection  
  } from './styles'
  

  
function CRP() {
    return (  
        <CRPContainer>
            <CRPSection>
            <Title>CRP</Title>
            <SubTitle>O Código de Roteamento Postal</SubTitle>
            <Description>
            Os códigos de CEP de 5 dígitos (CEP5) são de domínio público, 
            como se espera que seja um bem cultural, um complemento aos nomes 
            de cidade e nomes de bairro, presente em mapas e guias públicos, e 
            com seu uso obrigatório em formulários e cadastros exigidos pelo governo 
            desde a década de 1970.
            </Description>

            <Description> 
            O mesmo já ocorreu, mas não ocorre hoje, com os CEPs 
            de 8 dígidos (CEP8), que complementam nomes de rua e identificam trechos e localizações de 
            interesse público. A Empresa brasileira de Correios e Telégrafos (ECT), reclamou direitos 
            autorais sobre o banco de dados oficial do CEP8. 
            </Description>

            <Description>
            O projeto de Código de Roteamento Postal 
            contorna legalmente esta incoerência. 
            </Description>

          
            <Description>
                Para detalhes técnicos consulte a documentação:
            </Description>
                <Link>
                github.com/OSMBrasil/CRP
                </Link>  
        </CRPSection>
        </CRPContainer>
    );
}
export default CRP;