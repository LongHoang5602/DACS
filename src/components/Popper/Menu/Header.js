import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
function Header({title, onBack}) {
    return (  
        <header className="header__menu">
            <button className="back__btn" onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </button>
            <h4 className="header__menu__title">
                {title}
            </h4>
        </header>

    );
}

export default Header;

