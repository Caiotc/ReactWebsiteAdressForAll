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
`
export const DropDownMenuItem = styled.li`
    background: blue;
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
    width: 100%;
    height: 100%;
    text-decoration:none;
    color:#fff;
    padding:16px;
`

