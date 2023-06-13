import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { Link } from 'react-router-dom';

function AccountItem({ data }) {
    return (
        <Link to={`/users/${data._id}` } className="wrapper">
            {/* <img className='hinhanh' src={data.profilePicture || "https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png"} alt={data.username} />
             */}
            <div className='abc' style={{height: "100px" , backgroundColor:"red"}}>
            <img className='hinhanh' style={{height: "50px"}} src={ data.profilePicture || "https://cdn-icons-png.flaticon.com/512/3106/3106773.png" } alt={data.username} />
            <div className="info">
                <p className="name">
                    <h6>{data.username}</h6>
                    <span> {data.isAdmin && <FontAwesomeIcon icon={faCheckCircle} className="check" />}</span>
                </p>
            </div>
            </div>
        </Link>
    );
}

export default AccountItem;