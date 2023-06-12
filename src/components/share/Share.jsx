// import "./share.scss";
// import Image from "../../assets/img.png";
// import Map from "../../assets/map.png";
// import Friend from "../../assets/friend.png";
// import { useContext, } from "react";
// import { AuthContext } from "../../context/authContext";
// const Share = () => {
//     //const{currentUser} = useContext(AuthContext)
//     const { user } = useContext(AuthContext)
//     return (
//         <div className="share">
//             <div className="container">
//                 <div className="top">
//                     <img
//                         src={user.profilePic}
//                         alt=""
//                     />
//                     <input type="text" placeholder={`What's on your mind ${user.name}?`} 
//                     // onChange={(e)=>setDesc(e.target.value)}

//                     />
//                 </div>
//                 <hr />
//                 <div className="bottom">
//                     <div className="left">
//                         <input type="file" id="file" style={{ display: "none" }}
//                          />
//                         <label htmlFor="file">
//                             <div className="item">
//                                 <img src={Image} alt="" />
//                                 <span>Add Image</span>
//                             </div>
//                         </label>
//                         <div className="item">
//                             <img src={Map} alt="" />
//                             <span>Add Place</span>
//                         </div>
//                         <div className="item">
//                             <img src={Friend} alt="" />
//                             <span>Tag Friends</span>
//                         </div>
//                     </div>
//                     <div className="right">
//                         <button>Share</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Share;




//test 222222
// import "./share.scss";
// import Image from "../../assets/img.png";
// import Map from "../../assets/map.png";
// import Friend from "../../assets/friend.png";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../context/authContext";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { makeRequest } from "../../axios";
// const Share = () => {
//   const [file, setFile] = useState(null);
//   const [desc, setDesc] = useState("");

//   const upload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("file", file);
//       const res = await makeRequest.post("/upload", formData);
//       return res.data;
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const { currentUser } = useContext(AuthContext);

//   const queryClient = useQueryClient();

//   const mutation = useMutation(
//     (newPost) => {
//       return makeRequest.post("/posts", newPost);
//     },
//     {
//       onSuccess: () => {
//         // Invalidate and refetch
//         queryClient.invalidateQueries(["posts"]);
//       },
//     }
//   );

//   const handleClick = async (e) => {
//     e.preventDefault();
//     let imgUrl = "";
//     if (file) imgUrl = await upload();
//     mutation.mutate({ desc, img: imgUrl });
//     setDesc("");
//     setFile(null);
//   };

//   return (
//     <div className="share">
//       <div className="container">
//         <div className="top">
//           <div className="left">
//             <img src={"/upload/" + currentUser.profilePic} alt="" />
//             <input
//               type="text"
//               placeholder={`What's on your mind ${currentUser.name}?`}
//               onChange={(e) => setDesc(e.target.value)}
//               value={desc}
//             />
//           </div>
//           <div className="right">
//             {file && (
//               <img className="file" alt="" src={URL.createObjectURL(file)} />
//             )}
//           </div>
//         </div>
//         <hr />
//         <div className="bottom">
//           <div className="left">
//             <input
//               type="file"
//               id="file"
//               style={{ display: "none" }}
//               onChange={(e) => setFile(e.target.files[0])}
//             />
//             <label htmlFor="file">
//               <div className="item">
//                 <img src={Image} alt="" />
//                 <span>Add Image</span>
//               </div>
//             </label>
//             <div className="item">
//               <img src={Map} alt="" />
//               <span>Add Place</span>
//             </div>
//             <div className="item">
//               <img src={Friend} alt="" />
//               <span>Tag Friends</span>
//             </div>
//           </div>
//           <div className="right">
//             <button onClick={handleClick}>Share</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Share;






//test3
// import React, { useState } from 'react'
// import axios from 'axios'

// const Share = () => {
//     const [decs, setDecs] = useState('')
//     const [selectedFile, setSelectedFile] = useState(null)

//     const handleInputChange = (e) => {
//         setDecs(e.target.value)
//     }

//     const handleFileChange = (e) => {
//         setSelectedFile(e.target.files[0])
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const data = new FormData()
//         data.append('decs', decs)
//         data.append('img', selectedFile)
//         // http://localhost:1812/api/posts         '/post/create'

//         try {
//             const res = await axios.post('http://localhost:1812/api/posts', data, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             })

//             alert(res.data)
//         } catch (err) {
//             alert(err.response.data)
//         }
//     }

//     return (
//         <div className="share">
//             <form onSubmit={handleSubmit}>
//                 <div className="share__top">
//                     <img
//                         className="share__profileImg"
//                         src="/assets/person/1.jpeg"
//                         alt=""
//                     />
//                     <input
//                         type="text"
//                         className="share__input"
//                         placeholder="What's in your mind?"
//                         onChange={handleInputChange}
//                     />
//                 </div>
//                 <hr className="share__hr" />
//                 <div className="share__bottom">
//                     <div className="share__options">
//                         <label htmlFor="file" className="share__option">
//                             <span className="share__optionText">Upload a photo</span>
//                             <input
//                                 type="file"
//                                 id="file"
//                                 accept=".png,.jpeg,.jpg,.gif"
//                                 style={{ display: 'none' }}
//                                 onChange={handleFileChange}
//                             />
//                         </label>
//                     </div>
//                     <button className="share__button" type="submit">
//                         Share
//                     </button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Share




//tesst4
import React, { useState } from 'react'
import axios from 'axios'

import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Share = () => {
    const { user } = useContext(AuthContext)

    const [desc, setDesc] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)

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

        try {
            const res = await axios.post('http://localhost:1812/api/posts', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            alert(res.data)
        } catch (err) {
            alert(err.response.data)
        }
    }

    return (
        <div className="share">
            <div className="container">
                <div className="top">
                    <img
                        src={user.profilePic}
                        alt="Profile"
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
    );
};

export default Share;
