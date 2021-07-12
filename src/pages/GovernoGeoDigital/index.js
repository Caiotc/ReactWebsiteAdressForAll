import {useLanguage} from '../../context/language';
import {useLanguageState} from '../../context/languageState';

import {
    Title,
    SubTitle,
    Description,
    Link
  } from '../../components/globalComponents'
  
  import {  
    GeoDigitalContainer,
    GeoDigitalSection  
  } from './styles'
  

  
function GovernoGeoDigital() {

    const {language} = useLanguage();
    const {languageState} = useLanguageState();

    return (  
        <GeoDigitalContainer>
            <GeoDigitalSection>
            <Title>{languageState[language].governogeodigital.title}</Title>
            <br></br>
            <SubTitle>{languageState[language].governogeodigital.subTitle1}</SubTitle>
            <br></br>
            <Description>
              {languageState[language].governogeodigital.description1A}
            </Description>
            <Description>
              {languageState[language].governogeodigital.description1B}
            </Description>            

            <Link href="https://itgs.org.br">itgs.org.br</Link>  
        </GeoDigitalSection>
        </GeoDigitalContainer>
    );
}
export default GovernoGeoDigital;