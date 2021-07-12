import React,{useState} from 'react';
import {useLanguage} from '../../context/language';
import {useLanguageState} from '../../context/languageState'; 
import {
    Title,
    Description,
    Link
  } from '../../components/globalComponents'
  import {
      APIPageHubAnchor,
      APIPageSection,
      ApiPageContainer
  } from './styles'
  
function APIPage(props) {

  const {language} = useLanguage();
  const {languageState} = useLanguageState();
  //states
    return (
        <ApiPageContainer>
            <APIPageSection>
                <Title>
                    {props.title + ' #' +props.apiNumber}
                </Title>
                <Description>{props.apiDescription}</Description>
            </APIPageSection>
            <APIPageSection>
                <Link>
                    #
                </Link>
                <Link>
                    #
                </Link>
                <Link>
                    #
                </Link>
            </APIPageSection>
            <APIPageSection>
            </APIPageSection>            
        </ApiPageContainer>
    );
}

export default APIPage;