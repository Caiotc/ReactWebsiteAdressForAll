import styled from 'styled-components'

export const ContactSectionContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    
    width: 100%;
    height: 35%;
    padding: 2% 0% 2% 0%;
    background-color: #0B64E1;
    margin-left: 0;
    margin-right: 0;
    text-align: center;
`;
export const ContactSectionTextArea = styled.textarea`

    width: 50%;
    height: 80%;
    padding:1em;
    border-radius: 1em;
    background: #FFFFFF;
    vertical-align: middle;
    font-size: 12px;
    line-height: 15px;

    ::placeholder{
      color:979797;
      text-align:center;
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
    }

` 