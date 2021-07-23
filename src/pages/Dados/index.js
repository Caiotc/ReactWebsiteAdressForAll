import {useLanguage} from '../../context/language';
import {useLanguageState} from '../../context/languageState';
import React,{useState} from 'react';
import { ApiObject } from '../APIHub/APIs';
import APIPage from '../APIPage';
import {
    Title,
    SubTitle,
    Description,
    Link
  } from '../../components/globalComponents'

import {DataSection,DataPicture,DataDescriptionImgSection,DataPictureDescription,DataPageContentContainer, GridContainer, DescriptionsContainer} from './styles'
import Division from '../../components/Division/index'
import consolidados from '../../assets/images/Dados/consolidados.png'
import filtrados01 from '../../assets/images/Dados/filtrados01.png'
import modelo01 from '../../assets/images/Dados/modelo01.svg'
import modelo02 from '../../assets/images/Dados/modelo02.svg'
import preservados from '../../assets/images/Dados/preservados.png'

function Dados(){

    const {language} = useLanguage();
    const {languageState} = useLanguageState();
    const [isHub,setHub] = useState(true);
    const [apiPageProps,setApiPageProps] = useState({
      apiName:'',
      apiNumber:'',
      apiDescription:'',
      apiLink:''
    }) ;
    return(
        <div>{isHub?<DataPageContentContainer>
          <DataSection>
              <Title>{languageState[language].dados.title}</Title>
              <Description>
                {languageState[language].dados.descriptionTitleA}
              </Description>
              <Description>
                {languageState[language].dados.descriptionTitleB}
              </Description>
            <Link href ="https://github.com/AddressForAll/">git.AddressForAll.org</Link>
            <DataPicture src={modelo02} >

            </DataPicture>

            <SubTitle>{languageState[language].dados.subTitle1}</SubTitle>
            <DataDescriptionImgSection>
              <GridContainer>
                <DescriptionsContainer>
                  <Description>
                    {languageState[language].dados.description1}
                  </Description>
                </DescriptionsContainer>
                <DataPictureDescription src={preservados} width={'200px'} height={'130px'}/>
              </GridContainer>

            </DataDescriptionImgSection>
            <DataSection>
            {
                  ApiObject.map((item,index) =>{
                    if(index<3){
                      return(
                        <Link onClick={()=>{
                          setApiPageProps({    
                          apiName:item.title,
                          apiNumber:index,
                          apiDescription:item.description,
                          apiLink:''})                      
                          setHub(!isHub);   
                        }} key={index} >
                            {item.title}
                        </Link>);
                    }else{
                      <></>
                    }
                   
                  })
                }   
            </DataSection>                                     

            <SubTitle>{languageState[language].dados.subTitle2}</SubTitle>
            <DataDescriptionImgSection>
              <GridContainer>
                <DescriptionsContainer>
                <Description>
                {languageState[language].dados.description2A}
                </Description>                
                <Description>
                  {languageState[language].dados.description2B}
                </Description>
                </DescriptionsContainer>
                <DataPictureDescription src={filtrados01} width={'200px'} height={'210px'}/>
              </GridContainer>
            </DataDescriptionImgSection>
            {
                  ApiObject.map((item,index) =>{
                    if(index>2 && index<5){
                      return(
                        <Link onClick={()=>{
                          setApiPageProps({    
                          apiName:item.title,
                          apiNumber:index,
                          apiDescription:item.description,
                          apiLink:''})                      
                          setHub(!isHub);   
                        }} key={index} >
                            {item.title}
                        </Link>);
                    }else{
                      <></>
                    }
                   
                  })
                }   
            <SubTitle>{languageState[language].dados.subTitle3}</SubTitle>
            <DataDescriptionImgSection>
              <GridContainer>
                <DescriptionsContainer>
                  <Description>
                    {languageState[language].dados.description3A}
                  </Description>
                  <Description>
                    {languageState[language].dados.description3B}
                  </Description>
                  <Description>
                    {languageState[language].dados.description3C}
                  </Description>
                </DescriptionsContainer>
                <DataPictureDescription src={consolidados} width={'200px'} height={'300px'}/>
              </GridContainer>

            </DataDescriptionImgSection>
            {
                  ApiObject.map((item,index) =>{
                    if(index>4 && index<7){
                      return(
                        <Link onClick={()=>{
                          setApiPageProps({    
                          apiName:item.title,
                          apiNumber:index,
                          apiDescription:item.description,
                          apiLink:''})                      
                          setHub(!isHub);   
                        }} key={index} >
                            {item.title}
                        </Link>);
                    }else{
                      <></>
                    }
                   
                  })
                }   
            </DataSection>
                
            <Division description={languageState[language].dados.divison1} 
            buttonText={languageState[language].dados.divisonButon1} buttonType={'LightLink'} to={'/api-hub'} ></Division>
              <DataSection>             
          
            <SubTitle>{languageState[language].dados.subTitle4}</SubTitle>
              <Description>
                {languageState[language].dados.description4A}
              </Description>
              <Description>
                {languageState[language].dados.description4B}
              </Description>
              <Description>
                {languageState[language].dados.description4C}
              </Description>
              <DataPicture src={modelo01}/>
          </DataSection>
        </DataPageContentContainer>
        :
            <APIPage 
              title={apiPageProps.apiName} 
              apiNumber={apiPageProps.apiNumber}
              apiDescription={apiPageProps.apiDescription}
              />
        }
        </div>
        
        
      
    );    
}

export default Dados;