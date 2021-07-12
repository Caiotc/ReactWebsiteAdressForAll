import {useLanguage} from '../../context/language';
import {useLanguageState} from '../../context/languageState';

import {
    Title,
    SubTitle,
    Description,
    Link
  } from '../../components/globalComponents'
  
  import {  
      CRPContainer,
      CRPSection  
  } from './styles'
  

  
function CRP() {

    const {language} = useLanguage();
    const {languageState} = useLanguageState();

    return (  
        <CRPContainer>
            <CRPSection>
                <Title>{languageState[language].crp.title}</Title>
                <SubTitle>{languageState[language].crp.subTitle1}</SubTitle>
                <Description>
                    {languageState[language].crp.description1A}
                </Description>
                <Description> 
                    {languageState[language].crp.description1B}
                </Description>
                <Description>
                    {languageState[language].crp.description1C}
                </Description>
                <Description>
                    {languageState[language].crp.description1D}
                </Description>
                    <Link href="https://github.com/OSMBrasil/CRP">
                        github.com/OSMBrasil/CRP
                    </Link>  
            </CRPSection>
        </CRPContainer>
    );
}
export default CRP;