import {useLanguage} from '../../context/language';
import {useLanguageState} from '../../context/languageState';

import {
    Title,
    SubTitle,
    Description,
    DarkBlueButton,
    Link
  } from '../../components/globalComponents'

import {DataSection,DataPicture,DataDescriptionImgSection,DataPictureDescription,DataPageContentContainer, GridContainer, DescriptionsContainer} from './styles'
import Division from '../../components/Division/index'
import consolidados from '../../assets/images/Dados/consolidados.png'
import filtrados01 from '../../assets/images/Dados/filtrados01.png'
import filtrados02 from '../../assets/images/Dados/filtrados02.png'
import filtrados03 from '../../assets/images/Dados/filtrados03.png'
import modelo01 from '../../assets/images/Dados/modelo01.svg'
import modelo02 from '../../assets/images/Dados/modelo02.svg'
import preservados from '../../assets/images/Dados/preservados.png'

function Dados(){

    const {language} = useLanguage();
    const {languageState} = useLanguageState();

    return(
        <DataPageContentContainer>
          <DataSection>
              <Title>{languageState[language].dados.title}</Title>
              <br></br>
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
            <br></br>
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
            
            <Link href='/'>{languageState[language].dados.link1}</Link>
            <Link href='/'>{languageState[language].dados.link2}</Link>            
            <Link href='/'>{languageState[language].dados.link3}</Link>                                        

            <SubTitle>{languageState[language].dados.subTitle2}</SubTitle>
            <br></br>
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

            <Link href='/'>{languageState[language].dados.link4}</Link>
            <Link href='/'>{languageState[language].dados.link5}</Link>

            <SubTitle>{languageState[language].dados.subTitle3}</SubTitle>
            <br></br>
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
            <Link href='/'>{languageState[language].dados.link6}</Link>
            <Link href='/'>{languageState[language].dados.link7}</Link>
            </DataSection>
                  

            <Division description={languageState[language].dados.divison1} 
            buttonText={languageState[language].dados.divisonButon1} buttonType={'LightLink'} to={'/api'} ></Division>
              <DataSection>             
          
            <SubTitle>{languageState[language].dados.subTitle4}</SubTitle>
            <br></br>
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
            <br></br>
            <br></br>                                                              
          </DataSection>
        </DataPageContentContainer>
        
      
    );    
}

export default Dados;