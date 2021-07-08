import React,{useEffect, useCallback} from 'react';

import {useLanguage} from '../../context/language';
import {useLanguageState} from '../../context/languageState';

import {
    NavbarAnchor,
    NavbarContainer,
    NavbarContent,
    NavbarIcon,
    NavbarLogo,
    NavbarLinkIconWrapper
} from './style'

import logo from '../../assets/images/logo.png'
import git from '../../assets/images/git.png'
import dadosabertos from '../../assets/images/dadosabertos.png'



function Navbar() {

  const {language,setAppLanguage} = useLanguage();
  const {languageState} = useLanguageState();
  
  useEffect(()=>{
    setAppLanguage('BR');
  },[setAppLanguage]);


  const onLanguageSelectHandler = useCallback((selectedLanguage) => {
    setAppLanguage(selectedLanguage);
  }, []);

  return (    
    <NavbarContainer>
        <NavbarContent>                      
            <NavbarLogo  src={logo} alt={'Address for all'}/>
            <NavbarLinkIconWrapper>           
              <NavbarAnchor href='/quem-somos'>{languageState[language].navbar.link1}</NavbarAnchor>
              <span class="material-icons">expand_more</span>
            </NavbarLinkIconWrapper>
            <NavbarLinkIconWrapper>
              <NavbarAnchor href='/dados'>{languageState[language].navbar.link2}</NavbarAnchor>
              <span class="material-icons">expand_more</span>
            </NavbarLinkIconWrapper>
            <NavbarLinkIconWrapper>
              <NavbarAnchor>{languageState[language].navbar.link3}</NavbarAnchor>
              <span class="material-icons">expand_more</span>
            </NavbarLinkIconWrapper>
            <NavbarLinkIconWrapper>
              <NavbarAnchor>{languageState[language].navbar.link4}</NavbarAnchor>   
              <span class="material-icons">expand_more</span>
            </NavbarLinkIconWrapper>
            <NavbarIcon src={git} alt={'Github'}/>
            <NavbarIcon src={dadosabertos} alt={'Dados abertos'}/>
            <NavbarAnchor>BR</NavbarAnchor>
            <select onChange={(e)=>{onLanguageSelectHandler(e.target.value)}}>
              <option value="BR">BR</option>
              <option value="EN">EN</option>
            </select>
        </NavbarContent>
    </NavbarContainer>
  );
}

//hook dropdown!
function DropDown(){
  return(
    <div>
      <NavbarLinkIconWrapper>
        <NavbarAnchor>teste</NavbarAnchor>
        <span class="material-icons">expand_more</span>
      </NavbarLinkIconWrapper>
    </div>
  );
}
export default Navbar;
