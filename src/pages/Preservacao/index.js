import {useLanguage} from '../../context/language';
import {useLanguageState} from '../../context/languageState';

import {
    Title,
    SubTitle,
    Description,
    Link
  } from '../../components/globalComponents'
  
  import {  
      PreservationContainer,
      PreservationSection  
  } from './styles'
  

  
function Preservacao() {

    const {language} = useLanguage();
    const {languageState} = useLanguageState();

    return (  
        <PreservationContainer>
            <PreservationSection>
                <Title>{languageState[language].preservacaodigital.title}</Title>
                <SubTitle>{languageState[language].preservacaodigital.subTitle1}</SubTitle>
                <br></br>
                <Description>
                    {languageState[language].preservacaodigital.description1A}
                </Description>
                <Description>
                    {languageState[language].preservacaodigital.description1B}
                </Description>
                <Link href='https://github.com/AddressForAll/digital-preservation'>git.AddressForAll.org/digital-preservation</Link>
            </PreservationSection>
            <PreservationSection>
                <Description>
                    {languageState[language].preservacaodigital.description1C}
                </Description>
                <Description>
                    {languageState[language].preservacaodigital.description1D}
                </Description>
                <Description>
                    {languageState[language].preservacaodigital.description1E}
                </Description>

                <Link href='https://git.AddressForAll.org/digital-preservation-BR'>
                    git.AddressForAll.org/digital-preservation-BR
                </Link>
            </PreservationSection>
            <PreservationSection>
                <Description>
                    {languageState[language].preservacaodigital.description1F}
                </Description>
                <Link href='api-test.AddressForAll.org/v1.htm/vw_core/origin/BR'>
                    api-test.AddressForAll.org
                </Link>
            
                <Description>
                    {languageState[language].preservacaodigital.description1G}
                </Description>
                <Link href='https://api-test.AddressForAll.org/v1.htm/vw_core/donor/BR'>
                api-test.AddressForAll.org

                </Link>  
                </PreservationSection>
        </PreservationContainer>
    );
}
export default Preservacao;