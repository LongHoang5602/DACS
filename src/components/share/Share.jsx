
import React, { useState } from 'react'
import axios from 'axios'
import { useSessionStorage } from "react-use";
import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Share = () => {
    const { user } = useContext(AuthContext);
    const currentUser = user.currentUser;


    const [desc, setDesc] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    const [status, setStatus] = useState("")
    //const [token, setToken] = useSessionStorage("token");
    const handleInputChange = (e) => {
        setDesc(e.target.value)
    }
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('desc', desc)
        data.append('image', selectedFile)
        if (desc) {
            const resp = await axios.post('http://localhost:1812/api/posts', data, {
                headers: {
                    "content-type": "multipart/form-data",
                    Authorization: `Bearer ${currentUser.accessToken}`,
                },
            });
            if (resp.status === 200) {
                const data = await resp.data;
                console.log('OKE', data)

            } else {
                alert('err');
            }
        }
    }
    return (
        <form >
            <div className="share">
                <div className="container">
                    <div className="top">

                        <img
                            src={currentUser.profilePicture || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&usqp=CAU"}
                            alt=""
                        />

                        <input type="text" placeholder={`What's on your mind ${user.name}?`}
                            onChange={handleInputChange}

                        />
                    </div>
                    <hr />
                    <div className="bottom">
                        <div className="left">
                            <input type="file" id="file" style={{ display: "none" }}
                                accept=".png,.jpeg,.jpg,.gif"
                                onChange={handleFileChange}
                            />
                            <label htmlFor="file">
                                <div className="item">
                                    <img src={Image} alt="" />
                                    <span>Add Image</span>
                                </div>
                            </label>
                            <div className="item">
                                <img src={Map} alt="Add Place" />
                                <span>Add Place</span>
                            </div>
                            <div className="item">
                                <img src={Friend} alt="Tag Friends" />
                                <span>Tag Friends</span>
                            </div>
                        </div>
                        <div className="right">
                            <button onClick={handleSubmit}>Share</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
   
)};

export default Share;