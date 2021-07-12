import styled from "styled-components";

export const DropDownMenuContainer = styled.div`
    @media screen and (max-width: 960px) {
    .fa-angle-down {
        display: none;
    }
}
`
export const DropDownMenu = styled.ul`
    width: 200px;
    position: absolute;
    top: 80px;
    list-style: none;
    text-align:start;
    box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.15);
`
export const DropDownMenuItem = styled.li`
    background: #FFFFFF;
    cursor: pointer;
    :hover{
       background :lightblue ;
    }
    &.clicked{
        display:none
    }
`
export const DropDownAnchor = styled.a`
    display: block;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    text-decoration:none;
    color:black;
    padding:16px;
`

