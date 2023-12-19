import React from "react";
import Add from "../img/addAvatar.png";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">TNChat</span>
        <span className="title">Đăng Ký</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Tên của bạn" />
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Mật khẩu" />
          <input required type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Thêm ảnh</span>
          </label>
          <button>Đăng ký</button>
        </form>
        <p>Bạn có tài khoản chưa? Đăng nhập ngay</p>
      </div>
    </div>
  );
};

export default Register;
