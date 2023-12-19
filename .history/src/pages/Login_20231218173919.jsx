import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">TNChat</span>
        <span className="title">Đăng Nhập</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mật khẩu" />
          <button>Đăng nhập</button>
        </form>
        <p>Bạn chưa có tài khoản? Đăng ký ngay</p>
      </div>
    </div>
  );
};

export default Login;
