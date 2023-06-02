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

const Profile = () => {
    return (
        <div className="profile">
            <div className="images">
                <img
                    src="https://sohanews.sohacdn.com/2019/7/4/photo-1-1562199651348185342444.jpg"
                    alt=""
                    className="cover"
                />
                <img
                    src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/302054741_3273884822930952_6695725574292176155_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rUBcDkBmxwoAX8wl-uE&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfCF6j0V_YaxNUej7YdSbDbBy9Z5Ofk-caAL6I2dwgUMDw&oe=647D4C7B"
                    alt=""
                    className="profilePic"
                />
            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href="http://facebook.com">
                            <FacebookTwoToneIcon fontSize="large" />
                        </a>
                        <a href="http://facebook.com">
                            <InstagramIcon fontSize="large" />
                        </a>
                        <a href="http://facebook.com">
                            <TwitterIcon fontSize="large" />
                        </a>
                        <a href="http://facebook.com">
                            <LinkedInIcon fontSize="large" />
                        </a>
                        <a href="http://facebook.com">
                            <PinterestIcon fontSize="large" />
                        </a>
                    </div>
                    <div className="center">
                        <span>Jane Doe</span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon />
                                <span>USA</span>
                            </div>
                            <div className="item">
                                <LanguageIcon />
                                <span>lama.dev</span>
                            </div>
                        </div>
                        <button>follow</button>
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

