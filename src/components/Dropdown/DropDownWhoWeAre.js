import React,{useState} from 'react';
import {MenuItemsData,MenuItemsWhoweAre} from './MenuItems.js';
import {
    DropDownMenu,
    DropDownMenuItem,
    DropDownAnchor
} from './styles'
function DropDownWhoWeAre(props){
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    let result = (<></>);

    
    return(
        <>
            <DropDownMenu
                onClick={handleClick}
               className={click ?
               'clicked':
               ''}>
                   {MenuItemsWhoweAre.map((item,index) =>{
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

export default DropDownWhoWeAre;