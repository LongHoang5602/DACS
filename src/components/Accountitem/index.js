import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { Link } from 'react-router-dom';

function AccountItem({ data }) {
    return (
        <Link to={`/users/${data._id}` } className="Wrapper">
            <img src={data.profilePicture || "https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png"} alt={data.username} />
            <span className="info">
                <p className="name">
                    <h6>{data.username}</h6>
                    <span> {data.isAdmin && <FontAwesomeIcon icon={faCheckCircle} className="check" />}</span>
                </p>
            </span>
        </Link>
    );
}

export default AccountItem;