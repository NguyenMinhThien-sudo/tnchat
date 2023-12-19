import React from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">TNChat</span>
        <span className="title">Đăng Ký</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Tên của bạn" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mật khẩu" />
          <input type="file" id="file" />
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
