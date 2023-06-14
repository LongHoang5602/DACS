
<<<<<<< HEAD
=======
//tesst4
// import React, { useState } from 'react'
// import axios from 'axios'
// import { useSessionStorage } from "react-use";
// import "./share.scss";
// import Image from "../../assets/img.png";
// import Map from "../../assets/map.png";
// import Friend from "../../assets/friend.png";
// import { useContext } from "react";
// import { AuthContext } from "../../context/authContext";

// const Share = () => {
//     const fs = require('fs');



//     const { user } = useContext(AuthContext);
//     const currentUser = user.currentUser;


//     const [desc, setDesc] = useState('')
//     const [selectedFile, setSelectedFile] = useState(null)

//     const [token, setToken] = useSessionStorage("token");
//     const handleInputChange = (e) => {
//         setDesc(e.target.value)
//     }

//     const handleFileChange = (e) => {
//         setSelectedFile(e.target.files[0])
//     }
//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const data = new FormData();
//         const fileStream = fs.createReadStream('/path/to/file.jpg');
//         data.append('img', fileStream);
//         data.append('decs', 'alo alo');

//         const config = {
//             method: 'post',
//             maxBodyLength: Infinity,
//             url: 'http://localhost:1812/api/posts',
//             headers: {
//                 Authorization: `Bearer ${token}`,
//                 Cookie: `refreshToken=${document.cookie}`,
//                 ...data.getHeaders()
//             },
//             data: data,
//         };

//         axios(config)
//             .then(response => {
//                 console.log(response.data);
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     }

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault()
//     //     const data = new FormData()
//     //     data.append('desc', desc)
//     //     data.append('image', selectedFile)

//     //     // try {
//     //     //     const res = await axios.post('http://localhost:1812/api/posts', data, {
//     //     //         headers: {
//     //     //             Authorization: `Bearer ${token}`,
//     //     //             'Content-Type': 'multipart/form-data'
//     //     //         }
//     //     //     })
//     //     //     alert(res.data)
//     //     // } catch (err) {
//     //     //     alert(err.response.data)
//     //     // }
//     //     const makePostRequest = async (data) => {
//     //         const headers = {
//     //             Authorization: `Bearer ${document.cookie}`,
//     //             Cookie = refreshToken=document.cookies,
//     //             //'Content-Type': 'multipart/form-data'
//     //         };

//     //         try {
//     //             const res = await axios.post('http://localhost:1812/api/posts', data, headers);
//     //             alert(res.data);
//     //         } catch (err) {
//     //             alert(err.response.data);
//     //         }
//     //     };
//     //     await makePostRequest(data);
//     // }

//     return (
//         <div className="share">
//             <div className="container">
//                 <div className="top">

//                     <img
//                         src={currentUser.profilePicture || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&usqp=CAU"}
//                         alt=""
//                     />

//                     <input type="text" placeholder={`What's on your mind ${user.name}?`}
//                         onChange={handleInputChange}

//                     />
//                 </div>
//                 <hr />
//                 <div className="bottom">
//                     <div className="left">
//                         <input type="file" id="file" style={{ display: "none" }}
//                             accept=".png,.jpeg,.jpg,.gif"
//                             onChange={handleFileChange}
//                         />
//                         <label htmlFor="file">
//                             <div className="item">
//                                 <img src={Image} alt="" />
//                                 <span>Add Image</span>
//                             </div>
//                         </label>
//                         <div className="item">
//                             <img src={Map} alt="Add Place" />
//                             <span>Add Place</span>
//                         </div>
//                         <div className="item">
//                             <img src={Friend} alt="Tag Friends" />
//                             <span>Tag Friends</span>
//                         </div>
//                     </div>
//                     <div className="right">
//                         <button onClick={handleSubmit}>Share</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Share;





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




>>>>>>> b82989466f5cf7d189819f4a4c15b5e91fbc0f95
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
<<<<<<< HEAD
        data.append('desc', desc)
        data.append('image', selectedFile)
=======
        data.append('decs', desc)
        data.append('img', selectedFile)

        // try {
        //     console.log('desc',desc)
        //     console.log('img' ,selectedFile)
        //     const res = await axios.post('http://localhost:1812/api/posts', data, headers);
        //     alert(res.data);
        // } catch (err) {
        //     alert(err.response.data);
        // }
        console.log(desc)
        console.log(data)
>>>>>>> b82989466f5cf7d189819f4a4c15b5e91fbc0f95
        if (desc) {
            const resp = await axios.post('http://localhost:1812/api/posts', data, {
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
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

    )
};

export default Share;