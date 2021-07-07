import {
    Title,
    SubTitle,
    Description,
    DarkBlueButton,
    Link
  } from '../../components/globalComponents'
  
  import {  
        OSMContainer,
      OSMSection  
  } from './styles'
  

  
function OSM() {
    return (  
        <OSMContainer>
            <OSMSection>
            <Title>OSM.code</Title>
            <br></br>
            <SubTitle>Um geocódigo simples para localização</SubTitle>
            <br></br>
            <Description>
            A Latitude/Longitude é um código muito difícil para seres 
            humanos manusear e lembrar. Entretanto, apontar um local 
            no mapa é necessário para todos, particularmente para lugares onde 
            não tem endereços de qualidade, como nas comunidades, nos desertos, nas savanas 
            etc… 
            </Description>
            <Description>
            Geocódigos são códigos mais fáceis de lembrar, particularmente se desenvolvermos 
            geocódigos mais curtos. Este projeto realiza uma pesquisa acadêmica para desenvolver a 
            melhor tecnologia de Geocódigo e leva-la para os governos e a sociedade. Esta tecnologia 
            deveria considerar e ser harmonizada com as grades estatísticas, porque os estudos estatísticos, 
            cada dia mais, são geoespaciais.
            </Description>
            <Description>
            Para detalhes técnicos consulte a documentação:

            </Description>

                <Link href="https://ppkrauss.github.io/Sfc4q">ppkrauss.github.io/Sfc4q</Link>  
        </OSMSection>
        </OSMContainer>
    );
}
export default OSM;