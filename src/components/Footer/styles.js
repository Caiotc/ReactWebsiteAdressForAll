import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 100%!important;
    padding: 10%10%10%10%!important;
    height: 10%!important;
    background-color: #0B64E1;
    clear: both;
    margin-top: 100px;
`;

export const FooterContent = styled.div`
    width: 100%!important;
    display:flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 960px) {
        flex-direction: column;
    }
`;

export const LogoContainer = styled.div`
    width: 250px;
    width: 200px;
   
    @media(max-width: 960px) {
        margin-bottom:15px;
    }
`;

export const Logo = styled.img`
    width:100%;
    height:100%;
`;

export const SiteMapContainer = styled.div`
    width: 75%;
    float: left;
    color: #FFFFFF;
    font-family: Montserrat;
    text-align: justify;
    font-size: 18px;
    line-height: 2em;
    letter-spacing: 0;
    text-decoration: none;
    @media(max-width: 960px) {
        display:flex;
        flex-direction: column;
    }
`;

export const SiteMapColumn = styled.div`
    width: 25%;
    margin-left: 5%;
    float: left;

    @media(max-width: 960px) {
        width: 100%;
        text-align:center;
    }
`;

export const FooterLink = styled.a`
    color: #FFFFFF;
    text-decoration: none;        
`;