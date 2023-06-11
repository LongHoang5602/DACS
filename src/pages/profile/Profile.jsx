import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
const Profile = () => {
    const { user } = useContext(AuthContext);
    const currentUser = user.currentUser;
    return (
        <div className="profile">
            <div className="images">
                <img
                   src={currentUser.imgclone || "https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/328131634_851040912626486_1238169594137740475_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0hcsw9xMKAgAX_Ab2vy&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfDh30Wr7WTB-b6u9HtoLkOkvp4zMgAifKauZidNBBOp9w&oe=64863710"} 
                        alt=""
                    className="cover"
                />
                <img
                    src={currentUser.profilePicture || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCZuslFbn42wwA9qw6ywBERhtpr_yOFy3Cw&usqp=CAU"} 
                        alt=""
                    className="profilePic"
                />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href="https://www.facebook.com/profile.php?id=100065084714229">
                            <FacebookTwoToneIcon fontSize="large" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100065084714229">
                            <InstagramIcon fontSize="large" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100065084714229">
                            <TwitterIcon fontSize="large" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100065084714229">
                            <LinkedInIcon fontSize="large" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100065084714229">
                            <PinterestIcon fontSize="large" />
                        </a>
                    </div>
                    <div className="center">
                        <span>{currentUser.username}</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon />
                                <span>{currentUser.diachi}</span>
                            </div>
                            <div className="item">
                                <LanguageIcon />
                                <span>{currentUser.diachichitiet}</span>
                            </div>
                        </div>
                      
                        <div className="tieusu">{currentUser.tieusu}</div>
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon />
                        <MoreVertIcon />     
                    </div>
                    
                </div>
               
                <Posts />
                
            </div>
        </div>
    );
};

export default Profile;

