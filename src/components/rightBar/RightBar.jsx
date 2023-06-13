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
                                src="https://scontent-kul3-1.xx.fbcdn.net/v/t39.30808-6/322801516_839452683933438_7468276007487493613_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=saoJVJc7C-UAX-cybJb&_nc_ht=scontent-kul3-1.xx&oh=00_AfBQiMjlWWEVRlsvJ4UPMxtANBGTCGdT0DxdqH0_4lP9Zg&oe=648C58AD"
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
                                //src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/350531865_927243148501016_2896863404734285696_n.jpg?stp=dst-jpg_s720x720&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=CVOPfhi9fTgAX99vd2-&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfB8oMhEXYQEGBvzvoXmGjsaNvd9ov5JYPfXkybgBCbRGw&oe=647E3D8D"
                                src="https://scontent-kul3-1.xx.fbcdn.net/v/t1.6435-9/165787700_117421240437366_9165507717813368156_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=utF_oDHQdz4AX-whZkI&_nc_ht=scontent-kul3-1.xx&oh=00_AfCigdliVYJ-sqoz0OaRRaUiUH8YiSFWMosKi0ZReh3ziA&oe=64AFB3FA"
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
                                //src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/345435191_1222690698431413_1518888590167567162_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=esKRxtHtdx8AX-2cc2U&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfBgLJv9E5qjuE4U-4XzHPiwh77xcItsu0xoMUs3yNOYIA&oe=647D56F9"
                                src="https://scontent-kul2-1.xx.fbcdn.net/v/t1.18169-9/25552092_1385501681558901_8412989763954955950_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=uUpuLWS5d6AAX_B51QI&_nc_ht=scontent-kul2-1.xx&oh=00_AfAHuUcWMo2J0GRnJ4DnEXBA8rDERS5q2h3Ua79u4bUTOw&oe=64AF91D5"
                                alt=""
                            />
                            <p>
                                <span> Nguyễn Thanh Tùng</span> Cố gắng lên nào 3 chàng trai
                            </p>
                        </div>
                        <span>2 days ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://scontent-kul3-1.xx.fbcdn.net/v/t39.30808-6/352223729_3504932989731436_3673505003906397744_n.jpg?stp=dst-jpg_p843x403&_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=lQmI_Q3V_MwAX9gFlC9&_nc_ht=scontent-kul3-1.xx&oh=00_AfApFSAgbJ3XFyDmxIgVu1P6u-xjuyn2BmsjqHtBWdLB9g&oe=648D2831"
                                alt=""
                            />
                            <p>
                                <span>Linh Bún</span> đã cập nhật ảnh đại diện
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
                                src="https://scontent-kul2-1.xx.fbcdn.net/v/t39.30808-6/352814887_649020207254735_6217347599866237579_n.jpg?stp=cp6_dst-jpg_p843x403&_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=FfvOlCVqarkAX80FUYu&_nc_ht=scontent-kul2-1.xx&oh=00_AfAmjwa4qoogJfUAnwZALj-7AO7nRoCTMf8jg1mHlsms8Q&oe=648D99A6"
                                alt=""
                            />
                            <div className="offline" />
                            <span>Trịnh Tuyết Trân</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://scontent-kul2-1.xx.fbcdn.net/v/t39.30808-6/350351037_624888025983929_3063556492773519840_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=D1JAt7SCQ-wAX-aWT9_&_nc_ht=scontent-kul2-1.xx&oh=00_AfASO8ZpqdJ_PR1jMnpOqRsJBjHziVZAML_ix8HsAyedUA&oe=648CED3D"
                                alt=""
                            />
                            <div className="online" />
                            <span>Lục Anh </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightBar
