import "./rightBar.scss"

const RightBar = () => {
    return (
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/350941607_960788465056109_6711404598040025153_n.jpg?stp=dst-jpg_s600x600&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=yJMijiqW-xAAX_mBbQJ&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfDFJrxh5GCrvb3HbtgmTFLMIdJ5ibPMUtAa_vsRePTzbw&oe=647D84D5"
                                alt=""
                            />
                            <span>Jony Dang</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/350531865_927243148501016_2896863404734285696_n.jpg?stp=dst-jpg_s720x720&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=CVOPfhi9fTgAX99vd2-&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfB8oMhEXYQEGBvzvoXmGjsaNvd9ov5JYPfXkybgBCbRGw&oe=647E3D8D"
                                alt=""
                            />
                            <span>hutech</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/345435191_1222690698431413_1518888590167567162_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=esKRxtHtdx8AX-2cc2U&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfBgLJv9E5qjuE4U-4XzHPiwh77xcItsu0xoMUs3yNOYIA&oe=647D56F9"
                                alt=""
                            />
                            <p>
                                <span>Thanh Tung</span> đã bảo nộp đồ án cnmn
                            </p>
                        </div>
                        <span>1 year ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://phunugioi.com/wp-content/uploads/2022/11/Hinh-nen-don-gian-ma-dep.jpg"
                                alt=""
                            />
                            <p>
                                <span>Jane Doe</span> đã cập nhật ảnh đại diện
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://phunugioi.com/wp-content/uploads/2022/11/Hinh-nen-don-gian-ma-dep.jpg"
                                alt=""
                            />
                            <div className="offline" />
                            <span>Tran</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://phunugioi.com/wp-content/uploads/2022/11/Hinh-nen-don-gian-ma-dep.jpg"
                                alt=""
                            />
                            <div className="online" />
                            <span>Minh</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightBar
