import Tippy from '@tippyjs/react/headless'
import React, { useState } from "react";
// import {Wrapper as PopperWrapper} from '~/components/Popper';
import { Wrapper as PopperWrapper } from '../../Popper';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import Header from './Header';

const defaultFn = () => {}
function Menu( {children, items = [], onChange= defaultFn }) {

    const [history, setHistory] = useState([{
        data:items
    }]);
    const current = history[history.length -1]


    const reanderItems =() =>{
        return current.data.map((item, index) =>{
            const isParent = !!item.children
            return <MenuItem key ={index} data={item} onClick={()=>{
                if(isParent){
                    setHistory(prev => [...prev, item.children]);
                }
                else{
                    onChange(item);
                }
            }} />
    });
    };

    return (  
        <Tippy
        // visible
        interactive
        delay={[0,700]}
        placement="bottom-end"
        render={(attrs)=>(
            <div className="menu__content" tabIndex="-1" {...attrs}>
            <PopperWrapper>
            { history.length > 1  && <Header title="Language" onBack={()=>{
                setHistory(prev => prev.slice(0, prev.length-1));
            }}/>}
                            {reanderItems()}
            </PopperWrapper>
            </div>
        )}
        //giup tro lai menu dau tien
            onHide={() => setHistory(prev=> prev.slice(0,1))}
        >
        { children }
        </Tippy>
    );
}

export default Menu;
