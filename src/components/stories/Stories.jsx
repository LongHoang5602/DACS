import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

    const { user } = useContext(AuthContext)
    

    //TEMPORARY
    const stories = [
        {
            _id: 1,
            name: "Bánh Xèo",
            //img: "https://ketbanvietnam.com/wp-content/uploads/2022/08/nguc_bu-41.jpg",
            img: "https://cdnimg.vietnamplus.vn/uploaded/ngtnnn/2022_07_27/2707banhxeo.jpg",
        },
        {
            _id: 2,
            name: "Hambuger",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu6FQ8GuDCMg2kw_hYc5n93GYcqHPD7PexhabjNOek&s",
        },
        {
            _id: 3,
            name: "Bún bò",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4JvsvkD3m-S_xyb7lgAmOyiCFn2IyWD6z83hJpW0e&s",
        },
        {
            _id: 4,
            name: "Cake",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHo5uE_JLlCSZuMP3vx6CWD758BbiWMHDBEw&usqp=CAU",
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