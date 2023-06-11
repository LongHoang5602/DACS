import React from "react";
import styled from "styled-components";
import Button from "../../../Button";




function MenuItem({data, onClick}) {
    return (
        <Button className="menu__item" to={data.to} onClick={onClick}>  
        {data.icon}
        {data.title}
        </Button>
    );
}

export default MenuItem;