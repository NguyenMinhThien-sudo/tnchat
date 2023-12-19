import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">TNChat</span>
      <div className="user">
        <img
          src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww"
          alt=""
        />
        <span>Thiện</span>
        <button>Đăng xuất</button>
      </div>
    </div>
  );
};

export default Navbar;
