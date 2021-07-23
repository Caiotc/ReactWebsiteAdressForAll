import React,{useEffect, useCallback,useState} from 'react';

import {useLanguage} from '../../context/language';
import {useLanguageState} from '../../context/languageState';

import {
    NavbarAnchor,
    NavbarContainer,
    NavbarContent,
    NavbarIcon,
    NavbarLogo,
    LanguageSelect,
    LanguageOption,
    NavbarMenuIcon,
    NavbarMenu,
    NavbarItem,
    NavbarImgHolder,
    NavbarIcons,
    NavbarMaterialIcon,
    NavBarBurguer
} from './style'
import DropDownWhoWeAre from '../Dropdown/DropDownWhoWeAre'; 
import DropDownData from '../Dropdown/DropDownData';
import DropDownApi from '../Dropdown/DropDownApi';
import logo from '../../assets/images/logo.png'
import git from '../../assets/images/git.png'
import dadosabertos from '../../assets/images/dadosabertos.png'



function Navbar() {

  const {language,setAppLanguage} = useLanguage();
  const {languageState} = useLanguageState();
  
  //events menu
  //states
  const [click,setClick] =  useState(false);
  const [dropDown,setDropDown]= useState(false);
  const [dropdownData,setDropDownData] =useState(false);
  const [dropdownApi,setDropDownApi] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () =>{
    setClick(false) 
  }
  const onMouseEnter = (type) =>{
    if(window.innerWidth < 960){
      setDropDown(false)

    }
    else{
      setDropDown(true)
    }
  }
  const onMouseEnterData = ()=>{
    if(window.innerWidth < 960){
      setDropDownData(false)
    }
    else{
      setDropDownData(true)
    }
    console.log(dropdownData)
  }

  const onMouseEnterApi = ()=>{
    if(window.innerWidth < 960){
      setDropDownApi(false)
    }
    else{
      setDropDownApi(true)
    }
    console.log(dropdownData)
  }

  const onMouseLeaveApi = ()=>{
    if(window.innerWidth < 960){
      setDropDownApi(false)
    }
    else{
      setDropDownApi(false)
    }
  }
  const onMouseLeaveData = ()=>{
    if(window.innerWidth < 960){
      setDropDownData(false)
    }
    else{
      setDropDownData(false)
    }
  }
  const onMouseLeave = (type) =>{
    if(window.innerWidth < 960){
      setDropDown(false)
    }
    else{
      setDropDown(false)
    }
  }

  //
  useEffect(()=>{
    setAppLanguage('BR');
  },[setAppLanguage]);


  const onLanguageSelectHandler = useCallback((selectedLanguage) => {
    setAppLanguage(selectedLanguage);
  }, [setAppLanguage]);

  return (    
    <NavbarContainer>
        <NavbarContent>                                  
                       
            <NavbarMenuIcon
              onClick={handleClick}>
                <NavBarBurguer className={click 
                ?
                'fas fa-times':
                'fas fa-bars'}></NavBarBurguer>
            </NavbarMenuIcon>

            <NavbarMenu className={click?
            'active':
            ''}>
              <NavbarImgHolder>
                <a href ='/'>
                <NavbarLogo  src={logo} alt={'Address for all'}/> 
                </a>
              </NavbarImgHolder>
              <NavbarItem  
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}>
                <NavbarAnchor
                href='/quem-somos' 
                 onClick={closeMobileMenu}>
                {languageState[language].navbar.link1}</NavbarAnchor>
                <NavbarMaterialIcon className='fas fa-angle-down'/>
                {dropDown && <DropDownWhoWeAre />}
              </NavbarItem>
              <NavbarItem
                onMouseEnter={onMouseEnterData}
                onMouseLeave={onMouseLeaveData}>
                <NavbarAnchor
                  href='/dados'
                >{languageState[language].navbar.link2}</NavbarAnchor>
                <NavbarMaterialIcon className='fas fa-angle-down'/>
                {dropdownData && <DropDownData/>}
              </NavbarItem>
              <NavbarItem                  
              onMouseEnter={onMouseEnterApi}
              onMouseLeave={onMouseLeaveApi}>
                <NavbarAnchor
                  href='/api-hub' 
                >{languageState[language].navbar.link3}</NavbarAnchor>
                <NavbarMaterialIcon className='fas fa-angle-down'/>
                {dropdownApi && <DropDownApi/>}
              </NavbarItem>
              <NavbarItem>  
                <NavbarAnchor href='/contato'>{languageState[language].navbar.link4}</NavbarAnchor>   
              </NavbarItem>
              <NavbarIcons>
                <NavbarIcon src={git} alt={'Github'}/>
                <NavbarIcon src={dadosabertos} alt={'Dados abertos'}/>                
              </NavbarIcons>
              <LanguageSelect onChange={(e)=>{onLanguageSelectHandler(e.target.value)}}>
                  <LanguageOption value="BR">BR</LanguageOption>
                  <LanguageOption value="EN">EN</LanguageOption>
              </LanguageSelect>
            </NavbarMenu>

   

        </NavbarContent>
    </NavbarContainer>
  );
}

//hook dropdown!

export default Navbar;
