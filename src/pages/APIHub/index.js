import React,{useState} from 'react';
import {useLanguage} from '../../context/language';
import {useLanguageState} from '../../context/languageState'; 
import {ApiObject} from './APIs'
import {
    Title,
    Description,
  } from '../../components/globalComponents'
  import {  
    APIHubDiv,
    APIHubSection,
    APIHubContainer,
    APIHubAnchor
  } from './styles'
import APIPage from '../APIPage';
  
function APIHub() {

  const {language} = useLanguage();
  const {languageState} = useLanguageState();
  //states
  const AnchorOnClick = (item,index)=>{
                                     
  }
  const [isHub,setHub] = useState(true);
  const [apiPageProps,setApiPageProps] = useState({
    apiName:'',
    apiNumber:'',
    apiDescription:'',
    apiLink:''
  }) ;


    return (
        <APIHubDiv>{
            isHub?
              <APIHubContainer>
                <APIHubSection>
                <Title>API</Title>
                  <Description>As APIs do Portal do Instituto AddressForAll correspondem a funcionalidades 
                    de acesso direto ao nosso banco de dados, ou seja, os Dados descritos se podem ser acessados 
                    indiretamente atraves de nossos repositorios git, como diretamente atraves das nossas APIs.
                  </Description>
                </APIHubSection>
                <APIHubSection>
                {
                  ApiObject.map((item,index) =>{
                    return(
                    <APIHubAnchor onClick={()=>{
                      setApiPageProps({    
                      apiName:item.title,
                      apiNumber:index,
                      apiDescription:item.description,
                      apiLink:''})                      
                      setHub(!isHub);   
                    }} key={index} >
                        {item.title}
                    </APIHubAnchor>);
                  })
                }     
                </APIHubSection>
              </APIHubContainer>                                                  
            :
              
              <APIPage 
                title={apiPageProps.apiName} 
                apiNumber={apiPageProps.apiNumber}
                apiDescription={apiPageProps.apiDescription}
              />
          }  
          
        </APIHubDiv>
    );
}

export default APIHub;