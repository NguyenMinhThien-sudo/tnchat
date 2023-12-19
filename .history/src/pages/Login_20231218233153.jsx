import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">TNChat</span>
        <span className="title">Đăng Nhập</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mật khẩu" />
          <button>Đăng nhập</button>
          {err && (
            <span>Có lỗi xảy ra, vui lòng kiểm tra lại thông tin của bạn!</span>
          )}
        </form>
        <p>Bạn chưa có tài khoản? Đăng ký ngay</p>
      </div>
    </div>
  );
};

export default Login;
