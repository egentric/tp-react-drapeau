import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images importées depuis la balises IMG sont accessibles dans "public" */}
      <img src="./logo192.png" alt="logo react" />
      <h3>react World</h3>
    </div>
  );
};

export default Logo;
