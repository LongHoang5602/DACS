import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

    const { user } = useContext(AuthContext)

    //TEMPORARY
    const stories = [
        {
            _id: 1,
            name: "BDC",
            img: "https://ketbanvietnam.com/wp-content/uploads/2022/08/nguc_bu-41.jpg",
        },
        {
            _id: 2,
            name: "ABC",
            img: "https://znews-photo.zingcdn.me/w660/Uploaded/ofh_btgazspf/2019_09_20/6551657613483468119882577252616749667844096n156681182701518595034031567441982420569475801.jpg",
        },
        {
            _id: 3,
            name: "MMM",
            img: "https://axinh.net/wp-content/uploads/2022/06/gai-xinh-vu-to-0-640x825.jpg",
        },
        {
            _id: 4,
            name: "AAA",
            img: "https://anhsexyvsbg.com/wp-content/uploads/2022/08/thieucaidsadasda.jpg",
        },
    ];

    return (
        <div className="stories">
            <div className="story">
                <img src={user.profilePic} alt="" />
                <span>{user.name}</span>
                <button>+</button>
            </div>
            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories