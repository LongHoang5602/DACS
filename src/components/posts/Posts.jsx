import Post from "../post/Post";
import "./posts.scss";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
const Posts = () => {
    //TEMPORARY
    
    const { user } = useContext(AuthContext);
    const currentUser = user.currentUser ;
    const posts = [
        {
            id: 1,
            name: "Đạt Dễ Thương",
            userId: 1,
            profilePic:
                "https://scontent.fsgn5-6.fna.fbcdn.https://scontent-kul2-1.xx.fbcdn.net/v/t39.30808-6/322490528_1574798972944548_9166585399077860981_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AfPIkBI8P94AX8etSXb&_nc_ht=scontent-kul2-1.xx&oh=00_AfASgnP3f_X43tGRMyXZ5Q7JGsv9wyl4Xq8UMWp6BOWXcA&oe=648D41E3/v/t39.30808-6/302054741_3273884822930952_6695725574292176155_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rUBcDkBmxwoAX8wl-uE&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfCF6j0V_YaxNUej7YdSbDbBy9Z5Ofk-caAL6I2dwgUMDw&oe=647D4C7B",
            desc: "Con mèo dễ thương",
            img: "https://cdn.dribbble.com/userupload/6884369/file/original-b5b8e9f49c1b25b60678daad3e352c7b.jpg?compress=1&resize=1200x900",
        },
        {
            id: 2,
            name: "Đạt Dễ Thương",
            userId: 2,
            profilePic:
                "https://https://scontent-kul2-1.xx.fbcdn.net/v/t39.30808-6/322490528_1574798972944548_9166585399077860981_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AfPIkBI8P94AX8etSXb&_nc_ht=scontent-kul2-1.xx&oh=00_AfASgnP3f_X43tGRMyXZ5Q7JGsv9wyl4Xq8UMWp6BOWXcA&oe=648D41E3.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/275686199_337351678444320_2766908923032866736_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PAc2Qwh-xQMAX8Y9nUp&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfCxDAOyvYWfUCL3v-YV9uIVXkazFcYqHHELLQZkWOFYqA&oe=647DC7BA",
            desc: "Hình đẹp quá nè mọi người ơi",
            img: "https://cdn.dribbble.com/userupload/4273689/file/original-1da8172ad7bee395aecfc1c31d780d81.jpeg?compress=1&resize=1200x1600",
        },
        {
            id: 3,
            name: "Đạt Dễ Thương",
            userId: 3,
            profilePic:
                "https://thuthuatnhanh.com/wp-content/uploads/2020/09/avatar-trang-cuc-doc.jpg",
            desc: "Uống cà phê sáng không mọi người",
            img: "https://cdn.dribbble.com/userupload/3662231/file/original-d0460165b87bd37532a02918c8a259d1.png?compress=1&resize=1200x901",

        },
    ];

    return <div className="posts">
        {posts.map(post => (
            <Post post={post} key={post.id} />
        ))}
    </div>;
};

export default Posts;
