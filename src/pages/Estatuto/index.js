import {useLanguage} from '../../context/language';
import {useLanguageState} from '../../context/languageState';

import {
    Title,
    Description,
    Link
  } from '../../components/globalComponents'
  
  import {  
    StatuteContainer,
    StatuteSection  
  } from './styles'
  
function Estatuto() {

  const {language} = useLanguage();
  const {languageState} = useLanguageState();

    return (  
        <StatuteContainer>
            <StatuteSection>
              <Title>{languageState[language].estatuto.title}</Title>
            <Description>           
              {languageState[language].estatuto.descriptionTitle}
            </Description>                    
            <Link href="addressforall.org/estatuto">addressforall.org/estatuto</Link>  
        </StatuteSection>
        </StatuteContainer>
    );
}
export default Estatuto;