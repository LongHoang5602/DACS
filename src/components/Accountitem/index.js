import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { Link } from 'react-router-dom';

function AccountItem({ data }) {
    return (
        <Link to={`/users/${data._id}` } className="wrapper" >
            {/* <img className='hinhanh' src={data.profilePicture || "https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png"} alt={data.username} />
             */}
            <div className='abc' style={{height: "120px", width:"400px", backgroundColor:"white", padding:"15px 15px"}}>
            <img className='hinhanh' style={{height: "60px", width:"80px", borderRadius:"10%"}} src={ data.profilePicture || "https://cdn-icons-png.flaticon.com/512/3106/3106773.png" } />
            <div className="info" style={{textDecoration:"none"}} >
                <p className="name">
                    <h3 >{data.username}</h3>
                    <span> {data.isAdmin && <FontAwesomeIcon icon={faCheckCircle} className="check" />}</span>
                </p>
            </div>
            </div>
        </Link>
    );
}

export default AccountItem;