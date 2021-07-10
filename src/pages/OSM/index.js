import {useLanguage} from '../../context/language';
import {useLanguageState} from '../../context/languageState';

import {
    Title,
    SubTitle,
    Description,
    Link
  } from '../../components/globalComponents'
  
  import {  
        OSMContainer,
      OSMSection  
  } from './styles'
  

  
function OSM() {

    const {language} = useLanguage();
    const {languageState} = useLanguageState();

    return (  
        <OSMContainer>
            <OSMSection>
            <Title>{languageState[language].osm.title}</Title>
            <br></br>
            <SubTitle>{languageState[language].osm.subTitle1}</SubTitle>
            <br></br>
            <Description>
                {languageState[language].osm.description1A}
            </Description>
            <Description>
                {languageState[language].osm.description1B}
            </Description>
            <Description>
                {languageState[language].osm.description1C}
            </Description>
                <Link href="https://ppkrauss.github.io/Sfc4q">ppkrauss.github.io/Sfc4q</Link>  
        </OSMSection>
        </OSMContainer>
    );
}
export default OSM;