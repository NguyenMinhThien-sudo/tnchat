import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Hyper Chat</span>
      <div className="user">
        <img src={""} alt="" />
        <span>User</span>
        <button>Đăng xuất</button>
      </div>
    </div>
  );
};

export default Navbar;
