import {useLanguage} from '../../context/language';
import {useLanguageState} from '../../context/languageState';

import {
    Title,
    Description,
  } from '../../components/globalComponents'
  
  import {  
    DataTypeContainer,
    DataTypeSection  
  } from './styles'
  

  
function TipoDeDados() {

  const {language} = useLanguage();
  const {languageState} = useLanguageState();

  return (  
    <DataTypeContainer>
      <DataTypeSection>
        <Title>{languageState[language].tiposdedados.title}</Title>
        <Description>           
          {languageState[language].tiposdedados.descriptionTitle}
        </Description>                    
      </DataTypeSection>
    </DataTypeContainer>
  );
}
export default TipoDeDados;