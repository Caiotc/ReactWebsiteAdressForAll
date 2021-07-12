import React,{useState} from 'react';
import {MenuItemsApi} from './MenuItems.js';
import {
    DropDownMenu,
    DropDownMenuItem,
    DropDownAnchor
} from './styles'
function DropDownApi(props){
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);


    
    return(
        <>
            <DropDownMenu
                onClick={handleClick}
               className={click ?
               'clicked':
               ''}>
                   {MenuItemsApi.map((item,index) =>{
                       return(<DropDownMenuItem key ={index}>
                           <DropDownAnchor
                           href={item.path}
                           onClick={()=>setClick(false)}>
                               {item.title}
                           </DropDownAnchor>
                       </DropDownMenuItem>);
                   })}
            </DropDownMenu>
        </>
    );
}

export default DropDownApi;