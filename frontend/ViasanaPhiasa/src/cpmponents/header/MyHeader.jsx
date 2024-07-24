import "./header.css"

const MyHeader =() =>
{
    return (
        <div className="MyHeader">
            <h1>វាសនាភាសា</h1>
            <ul>
                <li> <a href="#">Trang chủ</a></li>
                <li><a href="#">Kiểm tra đầu vào</a></li>
                <li><a href="#">Giới thiệu</a></li>
                <li>
                    <button className="siginButton">Đăng Nhập</button>
                </li>
            </ul>
        </div>
    )
}

export default MyHeader