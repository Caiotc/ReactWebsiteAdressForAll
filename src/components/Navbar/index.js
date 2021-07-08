import React,{useEffect, useCallback} from 'react';

import {useLanguage} from '../../context/language';
import {useLanguageState} from '../../context/languageState';

import {
    NavbarAnchor,
    NavbarContainer,
    NavbarContent,
    NavbarIcon,
    NavbarLogo,
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
            <NavbarLogo src={logo} alt={'Address for all'}/>
            <NavbarAnchor>{languageState[language].navbar.link1}</NavbarAnchor>
            <NavbarAnchor>{languageState[language].navbar.link2}</NavbarAnchor>
            <NavbarAnchor>{languageState[language].navbar.link3}</NavbarAnchor>
            <NavbarAnchor>{languageState[language].navbar.link4}</NavbarAnchor>   
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

export default Navbar;
