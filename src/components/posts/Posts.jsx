import Post from "../post/Post";
import "./posts.scss";
const Posts = () => {
    //TEMPORARY
    const posts = [
        {
            id: 1,
            name: "Long",
            userId: 1,
            profilePic:
                "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/302054741_3273884822930952_6695725574292176155_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rUBcDkBmxwoAX8wl-uE&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfCF6j0V_YaxNUej7YdSbDbBy9Z5Ofk-caAL6I2dwgUMDw&oe=647D4C7B",
            desc: "Hé lo what your name",
            img: "https://clipnong.tv/wp-content/uploads/2023/02/hinh-vu-dep-2.jpg",
        },
        {
            id: 2,
            name: "Thanh Dat",
            userId: 2,
            profilePic:
                "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/275686199_337351678444320_2766908923032866736_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PAc2Qwh-xQMAX8Y9nUp&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfCxDAOyvYWfUCL3v-YV9uIVXkazFcYqHHELLQZkWOFYqA&oe=647DC7BA",
            desc: "Làm nháy khong em.",
            img: "https://gaixinhdep.net/wp-content/uploads/2023/02/gai-xinh-2.jpg",
        },
        {
            id: 3,
            name: "Hoang Long",
            userId: 3,
            profilePic:
                "https://thuthuatnhanh.com/wp-content/uploads/2020/09/avatar-trang-cuc-doc.jpg",
            desc: "Là nó như dầy nè",
            img: "https://1.bp.blogspot.com/-Ymy1VphvFu0/XXNalj0O-AI/AAAAAAAAAxw/6XiiXnCLRTkoYFw9Wr20amNgVcJ8l3vIwCLcBGAs/s1600/hinh-gai-chau-au-mac-do-boi-nong-bong-696x385.jpg",

        },
    ];

    return <div className="posts">
        {posts.map(post => (
            <Post post={post} key={post.id} />
        ))}
    </div>;
};

export default Posts;
