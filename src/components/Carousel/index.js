import {LightBlueButton,DarkBlueButton} from '../globalComponents'

import {
  DivisionContainer,
  DivisionContent,
  LogoContainer,
  Logo,
  DivisionInfo,
  Description
} from './style'

import logo from '../../assets/images/logo.png'

function Carousel(props) {
  return (    
    <DivisionContainer>
      <DivisionContent>
        <LogoContainer>
          <Logo src={logo} alt={'Address for all'}/>
        </LogoContainer>
        <DivisionInfo>
          <Description>{props.description}</Description>
          {props.buttonType === 'Light' &&
            <LightBlueButton>{props.buttonText}</LightBlueButton>
          }
          {props.buttonType === 'Dark' &&
            <DarkBlueButton>{props.buttonText}</DarkBlueButton>
          }
        </DivisionInfo>
      </DivisionContent>
    </DivisionContainer>

  );
}

export default Carousel;
