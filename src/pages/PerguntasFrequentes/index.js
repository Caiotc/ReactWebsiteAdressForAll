import {useLanguage} from '../../context/language';
import {useLanguageState} from '../../context/languageState';

import {
    Title,
    Description,
    Link,
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

    const {language} = useLanguage();
    const {languageState} = useLanguageState();

    return (  
        <QandAContainer>
          <QandASection>
            <Title>{languageState[language].perguntasfrequentes.title}</Title>
            <br></br>
            <QandASubtittleItalic>{languageState[language].perguntasfrequentes.subTitle1}</QandASubtittleItalic>
            <br></br>
            <QandASubtittleItalic>           
              {languageState[language].perguntasfrequentes.question1}
            </QandASubtittleItalic>   
            <br></br>                 
            <Description>
              {languageState[language].perguntasfrequentes.answer1} 
            </Description>
            <QandADescription>
              <QandAList>
                <QandAListItem>
                  <QandADescription>
                    <QandAAnchor href='http://addressforall.org/dados'>{languageState[language].perguntasfrequentes.link1}</QandAAnchor>
                    {languageState[language].perguntasfrequentes.answer1Description1}
                  </QandADescription>
                </QandAListItem>
                <QandAListItem>
                  <QandADescription>
                    <QandAAnchor href='http://addressforall.org/dados'>{languageState[language].perguntasfrequentes.link2}</QandAAnchor>
                    {languageState[language].perguntasfrequentes.answer1Description2}
                  </QandADescription>
                </QandAListItem>
                <QandAListItem>
                  <QandADescription>
                    <QandAAnchor href='http://addressforall.org/dados'>{languageState[language].perguntasfrequentes.link3}</QandAAnchor>
                    {languageState[language].perguntasfrequentes.answer1Description3}
                  </QandADescription>
                </QandAListItem>
              </QandAList>
            </QandADescription>
            
            <Description>            
              {languageState[language].perguntasfrequentes.answer1Description4}
            </Description>

            <QandASubtittleItalic>
              {languageState[language].perguntasfrequentes.question2}</QandASubtittleItalic>
            <br></br>
              <QandADescription>            
                {languageState[language].perguntasfrequentes.answer2Description1}
              </QandADescription>
              <QandADescription>            
                {languageState[language].perguntasfrequentes.answer2Description2}
              </QandADescription>
              
                
            <QandAList>
              <QandAListItem>
                <QandADescription>
                  {languageState[language].perguntasfrequentes.answer2Description3}<QandAAnchor href='https://wiki.openstreetmap.org/wiki/CM/pt/BR/006_-_Indica%C3%A7%C3%A3o_de_dom%C3%ADnio_p%C3%BAblico_em_dados_disponibilizados_pelo_poder_executivo_federal'>{languageState[language].perguntasfrequentes.link4}</QandAAnchor>. 
                </QandADescription>
              </QandAListItem>
              <QandAListItem>
                <QandADescription>
                  {languageState[language].perguntasfrequentes.answer2Description4}<QandAAnchor href='https://wiki.openstreetmap.org/wiki/CM/pt/BR/001_-_Decreto_Municipal_para_Licenciamento_de_Dados'>{languageState[language].perguntasfrequentes.link5}</QandAAnchor>. 
                </QandADescription>
              </QandAListItem>
              <QandAListItem>
                <QandADescription>
                  {languageState[language].perguntasfrequentes.answer2Description5}<QandAAnchor href='https://dadosabertos.social/t/formalizacao-dos-dados-livres-nas-prefeituras-proatividade-por-cc0/608'>{languageState[language].perguntasfrequentes.link6}</QandAAnchor>.
                </QandADescription>
              </QandAListItem>
            </QandAList>
                        
            {languageState[language].perguntasfrequentes.answer2Description6}
            

            <QandASubtittleItalic>{languageState[language].perguntasfrequentes.question3}</QandASubtittleItalic>
            <br></br>
            <QandADescription>
              {languageState[language].perguntasfrequentes.answer3Description1}<QandAAnchor href='https://creativecommons.org/publicdomain/zero/1.0/deed.pt_BR'>CC0</QandAAnchor>, {languageState[language].perguntasfrequentes.answer3Description2}
              <br></br>
              <br></br>
              {languageState[language].perguntasfrequentes.answer3Description3} <QandAAnchor href='creativecommons.org/licenses/by-sa/2.0/br'>CC BY-SA</QandAAnchor>, {languageState[language].perguntasfrequentes.answer3Description4}<QandAAnchor href='https://opendatacommons.org/licenses/odbl/'>ODbL </QandAAnchor>
              {languageState[language].perguntasfrequentes.answer3Description5}
            </QandADescription>
            
            <QandASubtittleItalic>{languageState[language].perguntasfrequentes.question4}</QandASubtittleItalic>       
            <br></br>   
            <QandADescription>
              {languageState[language].perguntasfrequentes.answer4Description1}
            </QandADescription>
            <Link href='/contato'>addressforall.org/contato</Link>
            <QandASubtittleNormal>{languageState[language].perguntasfrequentes.subTitle2}</QandASubtittleNormal>
            <br></br>
            <QandASubtittleItalic>
              {languageState[language].perguntasfrequentes.description2}
            </QandASubtittleItalic>
            <br></br>
            <QandASubtittleNormal>
              {languageState[language].perguntasfrequentes.subTitle3}
            </QandASubtittleNormal>
            <br></br>
            <QandASubtittleItalic>
              {languageState[language].perguntasfrequentes.question5}
            </QandASubtittleItalic>
            <br></br>
            <QandADescription>
              {languageState[language].perguntasfrequentes.answer5Description1}
            </QandADescription>
            <Link href='/quemsomos'>addressforall.org/quem-somos</Link>
          </QandASection>


        </QandAContainer>
    );
}
export default PerguntasFrequentes;