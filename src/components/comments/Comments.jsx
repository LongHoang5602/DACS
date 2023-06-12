import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
    const { user } = useContext(AuthContext);
    const currentUser = user.currentUser ;
    //const { currentUser } = useContext(AuthContext);
    //Temporary
    const comments = [
        {
            id: 1,
            desc: "haha",
            name: "Long",
            userId: 1,
            profilePicture:
                "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/302054741_3273884822930952_6695725574292176155_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rUBcDkBmxwoAX8wl-uE&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfCF6j0V_YaxNUej7YdSbDbBy9Z5Ofk-caAL6I2dwgUMDw&oe=647D4C7B",
        },
        {
            id: 2,
            desc: "dep qua",
            name: "Thanh Dat",
            userId: 2,
            profilePic:
                "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/275686199_337351678444320_2766908923032866736_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PAc2Qwh-xQMAX8Y9nUp&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfCxDAOyvYWfUCL3v-YV9uIVXkazFcYqHHELLQZkWOFYqA&oe=647DC7BA",


        },
    ];
    return (
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePicture} alt="" />
                <input type="text" placeholder="write a comment" />
                <button>Send</button>
            </div>
            {comments.map((comment) => (
                <div className="comment">
                    <img src={comment.profilePicture} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))}
        </div>
    );
};

export default Comments;
