
import {
    Title,
    SubTitle,
    Description,
    DarkBlueButton,
    Link
  } from '../../components/globalComponents'

import {DataSection,DataPicture,DataDescriptionImgSection,DataPictureDescription,DataPageContentContainer} from './style'
import Division from '../../components/Division/index'
import consolidados from '../../assets/images/Dados/consolidados.png'
import filtrados01 from '../../assets/images/Dados/filtrados01.png'
import filtrados02 from '../../assets/images/Dados/filtrados02.png'
import filtrados03 from '../../assets/images/Dados/filtrados03.png'
import modelo01 from '../../assets/images/Dados/modelo01.svg'
import modelo02 from '../../assets/images/Dados/modelo02.svg'
import preservados from '../../assets/images/Dados/preservados.png'

function Dados(){
        return(
            <DataPageContentContainer>
              <DataSection>
                  <Title>Dados</Title>
                  <br></br>
                  <Description>Os dados disponibilizados pelo Instituto 
                      AddressForAll podem ser analisados nas nossas APIs 
                      ou baixados, por partes (dados locais por exemplo de 
                      um município) e por etapa do seu ciclo de processamento. 
                      A seguir uma descrição resumida dos conjuntos de dados 
                      resultantes de cada uma dessas etapas. Para detalhes técnicos 
                      consulte a documentação:
                </Description>
                <Link href ="https://github.com/AddressForAll/">git.AddressForAll.org</Link>
                <DataPicture src={modelo02} >

                </DataPicture>
              </DataSection>
              <DataSection>
                <SubTitle>Dados Preservados</SubTitle>
                <br></br>
                <DataDescriptionImgSection>
                  <Description>
                    Recebemos pacotes de dados de diferentes fornecedores, registrando em cartório a sua licença (livre), 
                    a sua autoria e seu hash de integridade e identificação. Nós preservamos os pacotes, tal como os recebemos, 
                    por 20 anos. Recebemos de prefeituras, concessionárias, empresas de 
                  </Description>
                  <DataPictureDescription src={preservados}/>
                </DataDescriptionImgSection>
                <Link href='/'>API 01 - Encontre Fornecedores que já doaram dados</Link>
                <Link href='/'>API 02 - Consulte Jurisdições (locais) que já receberam dados</Link>            
                <Link href='/'>API 03 - Recupere pacotes de dados pelo hash</Link>                                        
              </DataSection>
              
              <DataSection>
                <SubTitle>Dados Filtrados (Entrada)</SubTitle>
                <br></br>
                <DataDescriptionImgSection>
                  <Description>
                  Selecionamos de cada pacote cada pacote doado as camadas relativas
                  a endereços, tais como mapas de eixos de rua, bairros ou pontos 
                  de endereço postal de uma cidade. Essas camadas selecionadas são 
                  estruturadas de forma padronizada para que possam, após ingeridas numa 
                  mesma base de dados, ser comparadas com as suas similares, oriundas de pacotes de 
                  outros fornecedores. 
                  </Description>
                  <DataPictureDescription src={filtrados01}/>
                </DataDescriptionImgSection>
                <Link href='/'>API 04 - Dados organizados por Fornecedor ou Jurisdição (local)</Link>
                <Link href='/'>API 05 - Confira se um endereço está entre os dados filtrados</Link>                                                
              </DataSection>

              <DataSection>
                <SubTitle>Dados Filtrados (Entrada)</SubTitle>
                <br></br>
                <DataDescriptionImgSection>
                  <Description>
                  Uma vez que a estrutura de cada camada da etapa anterior se encontra 
                  harmonizada, é necessário padronizar o conteúdo. As colunas de cada tabela 
                  estruturalmente harmonizada precisam ainda cumprir com o formato esperado, 
                  tendo seu valor convertido sempre que estiver fora do padrão. Por exemplo, 
                  nomes de rua podem vir como “Av.” ou “Avenida”, então adotamos o não-abreviado; 
                  podem vir com grafias distintas, “Sylvio” e “Silvio”, então escolhemos a oficial. 
                  Fazemos também pequenas correções como reposicionar um ponto fora do lote correspondente. 
                  Em seguida comparamos endereços entre si (p. ex. OpenStreetMap e prefeitura). Se um endereço coincide 
                  com o de outra fonte distinta, ele é tido como mais confiável, se não coincidir, é necessário eleger 
                  qual utilizar. A análise espacial e estatística fornece então os dados finais, consolidados.
                  </Description>
                  <DataPictureDescription src={filtrados02}/>
                </DataDescriptionImgSection>
                <Link href='/'>API 06 - Buscar um endereço no banco de dados consolidados</Link>
                <Link href='/'>API 07 - Ver serviços e APIs disponíveis</Link>                                                
              </DataSection>

              <Division description={`No link abaixo você pode acessar 
              nossa página de demonstração composta por APIs bem como 
              acessar cada uma dessas APIs.`} 
              buttonText={'Página de APIs'} buttonType={'Light'}></Division>
                            
              <DataSection>
                <SubTitle>Dados Filtrados (Entrada)</SubTitle>
                <br></br>
                  <Description>
                  Temos uma equipe que liga para os detentores 
                  de dados e os motiva a doá-los para o projeto 
                  AddressForAll, com licenças livres. Podemos fazer 
                  campanhas específicas em regiões ou países, sob demanda. 
                  Ofertamos através de nossa API e recursos de download os 
                  Dados Preservados, tal como os recebemos, e com total rastreabilidade do doador, 
                  comprovação de integridade (hash SHA256) e comprovação da licença. Todos os demais 
                  dados estão disponíveis num lugar só e uma só API: os Dados Filtrados organizados em 
                  um mesmo banco de dados, onde podem ser comparados; e os Dados Consolidados em uma base 
                  otimizada, ligada aos filtrados.
                  </Description>
                  <DataPicture src={modelo01}/>
                <br></br>
                <br></br>                                                              
              </DataSection>
            </DataPageContentContainer>
            
          
        );    
}

export default Dados;