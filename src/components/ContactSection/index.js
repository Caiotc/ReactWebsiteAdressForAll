import {LightBlueButton,DarkBlueButton} from '../globalComponents'

import {
    ContactSectionContainer,
    ContactSectionTextArea
    
} from './style'


function ContactSection(props) {
  return (    
    <ContactSectionContainer>        
        <ContactSectionTextArea rows="10" cols="10" placeholder={props.description}/>
        <br></br>
        {props.buttonType === 'Light' &&
            <LightBlueButton>{props.buttonText}</LightBlueButton>
        }
          {props.buttonType === 'Dark' &&
            <DarkBlueButton>{props.buttonText}</DarkBlueButton>
        }
    </ContactSectionContainer>

  );
}

export default ContactSection;