import {
    Title,
    SubTitle,
    Description,
    Link,
    DarkBlueButton
  } from '../../components/globalComponents'
  
  import {  
    QandAContainer,
    QandASection,
    QandASubtittleItalic,
    QandASubtittleNormal,
    QandADescription,    
    QandAList,
    QandAListItem ,
    QandAAnchor
  } from './styles'
  


  function PerguntasFrequentes() {
    return (  
        <QandAContainer>
          <QandASection>
            <Title>Perguntas Frequentes</Title>
            <br></br>
            <QandASubtittleItalic>Dados</QandASubtittleItalic>
            <br></br>
            <QandASubtittleItalic>           
            Enviei uma base de dados geográficos do meu município. Posso ver estes dados no AddressForAll?
            </QandASubtittleItalic>                    
            <Description>
            Sim. Os dados recebidos são disponíveis de 3 maneiras: 
            </Description>
            <QandADescription>
              <QandAList>
                <QandAListItem>
                  <QandADescription>
                  <QandAAnchor href='http://addressforall.org/dados'>Dados Preservados</QandAAnchor>.Cada pacote fica preservado por 20 anos, conservamos os dados
                      tal como recebidos e os disponibilizamos através de download;
                  </QandADescription>
                </QandAListItem>
                <QandAListItem>
                  <QandADescription>
                      <QandAAnchor href='http://addressforall.org/dados'>Dados Filtrados</QandAAnchor>,disponibilizados quase brutos, através através de mapas, estatísticas 
                      ou downloads. São dados submetidos a um tratamento preliminar (apenas a estrutura dos dados originais é tratada);                
                  </QandADescription>
                </QandAListItem>
                <QandAListItem>
                  <QandADescription>
                      <QandAAnchor href='http://addressforall.org/dados'>Dados consolidados</QandAAnchor>,
                      com conteúdo eventualmente modificado, disponibilizados em serviços, APIs 
                      e downloads. Não serão mais os “seus dados”, pois a sua contribuição pode ser descartada, 
                      ou estar misturada na forma de média com outros dados.                    
                  </QandADescription>
                </QandAListItem>
              </QandAList>
            </QandADescription>
            
            <Description>            
              São vários os tipos de modificação, vejamos alguns exemplos. 
              O Instituto pode decidir consolidar os nomes de via, por exemplo, substituindo todas as 
              abreviações “Av.” por “Avenida”. Se os pontos de endereço estão posicionados no meio do lote, 
              o Instituto reposicionará o ponto para a frente do lote, próximo à rua.
            </Description>

            <QandASubtittleItalic>Posso ver a licença dos dados?</QandASubtittleItalic>
            <br></br>
            <QandADescription>
            Sim. Para cada tipo de dado (preservado, filtradoe consolidado), pode haver uma licença diferente. 
            Os dados originais e os filtrados recebem a licença do dado original do doador. Os dados consolidados recebem 
            uma licença conforme originais rastreáveis e, no caso de dados iguais com licenças diferentes, adota-se a mais aberta 
            (menos restritiva), variando no espectro das “famílias de licença”, de CC0 a CC-BY-NC-SA, mas com a maioria em CC0. 
            <br></br>
            <br></br>
            Quando o dado original é proveniente de um órgão público, mesmo não possuindo uma licença, fica implícita aquela prevista pela legislação 
            brasileira, conforme a seguinte regra: 
            <br></br>
            <br></br>
            <QandAList>
              <QandAListItem>
                <QandADescription>
                  Dados de órgãos federais: <QandAAnchor href='https://wiki.openstreetmap.org/wiki/CM/pt/BR/006_-_Indica%C3%A7%C3%A3o_de_dom%C3%ADnio_p%C3%BAblico_em_dados_disponibilizados_pelo_poder_executivo_federal'>são sempre CC0.</QandAAnchor> 
                </QandADescription>
              </QandAListItem>
              <QandAListItem>
                <QandADescription>
                Dados de órgãos municipais ou estaduais: são em geral implicitamente abertos como os federais, 
                mas podem depender de legislação específica. <QandAAnchor href='https://wiki.openstreetmap.org/wiki/CM/pt/BR/001_-_Decreto_Municipal_para_Licenciamento_de_Dados'>Exemplo</QandAAnchor>. 
                </QandADescription>
              </QandAListItem>
              <QandAListItem>
                <QandADescription>
                Dados do poder público mas com origem em serviços 
                de terceiros e antes da Lei de Acesso à Informação de 2011, <QandAAnchor href='https://dadosabertos.social/t/formalizacao-dos-dados-livres-nas-prefeituras-proatividade-por-cc0/608'>ver discussão</QandAAnchor>.
                </QandADescription>
              </QandAListItem>
            </QandAList>
                        
            Os dados consolidados, por terem valor agregado pelo Instituto, recebem 
            a licença de escolha do Instituto, que é a CC0 sempre que possível.
            </QandADescription>

            <QandASubtittleItalic>Posso baixar os dados e combiná-los com a minha base de dados interna?</QandASubtittleItalic>
            <br></br>
            <QandADescription>
              Sim e não. O AddresForAll procura trabalhar com dados abertos, sendo que duas licenças estão disponíveis. 
              A primeira, <QandAAnchor href='https://creativecommons.org/publicdomain/zero/1.0/deed.pt_BR'>CC0</QandAAnchor>, permite fazer “tudo”. 
              Pode baixar os dados, misturá-los com dados privados e declarar o novo conjunto privado. 
              <br></br>
              <br></br>
              A licença CC BY-SA, similar à <QandAAnchor href='https://opendatacommons.org/licenses/odbl/'>ODbL</QandAAnchor>, usada por 
              exemplo pelo OpenStreetMap, não é tão permissiva,podendo “contaminar” a base que recebe os dados. A base de dados resultante da 
              combinação dos dois dados não pode ser mais “privada” nem ser redistribuída com a licença CC0, mas somente com a licença CC BY-SA. Isto pode ser inadequado para órgãos de governo que têm como 
              compromisso publicar de processamento dos dados no Diário Oficial, que é um documento necessariamente CC0.
            </QandADescription>
            
            <QandASubtittleItalic>Posso enviar dados?</QandASubtittleItalic>          
            <QandADescription>
              Sim. Entre em contato conosco em nossa página de contato: addressforall.org/contato
            </QandADescription>
            <Link href='/contato'>addressforall.org/contato</Link>
            <QandASubtittleNormal>API</QandASubtittleNormal>
            <br></br>
            <QandASubtittleItalic>
              Em contrução
            </QandASubtittleItalic>
            <QandASubtittleNormal>
              Outros
            </QandASubtittleNormal>
            <br></br>
            <QandASubtittleItalic>
              Conheça nossa formulação instituicional em nossa página de quem somos:
            </QandASubtittleItalic>
            <br></br>
            <Link href='/quemsomos'>addressforall.org/quem-somos</Link>
          </QandASection>


        </QandAContainer>
    );
}
export default PerguntasFrequentes;