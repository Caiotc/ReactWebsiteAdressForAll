import styled from 'styled-components'

export const DataPageContentContainer = styled.div`
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const DataSection = styled.div`
    margin-top: 3em;
    width: 85%;
    padding: 1em;
    display: flex;
    flex-direction: column; 
`
export const DataDescriptionImgSection = styled.div`
    flex:1;
    display:flex;
    justify-content:center;
    align-items:center;
`;
export const DataPicture = styled.img`
    
`;
export const DataPictureDescription = styled.img`
    width: ${props => props.width ? props.width : '150px'};
    height: ${props => props.height ? props.height : '130px'};
    grid-area: 'image';
    @media screen and (max-width: 960px) {        
        margin: 10px 0 15px 0;
    }
`;

export const DescriptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: 'descripts';
    margin-right: 10px;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-areas: 'descripts descripts image';
    width: 100%;
    align-items: center;
    @media screen and (max-width: 960px) {        
        display: flex;
        flex-direction: column;
        justify-content: space-between
    }
`;

