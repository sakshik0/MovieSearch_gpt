import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
      <img
        alt="login img"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      ></img>
      </div>
      <from className="w-3/12 rounded-lg absolute p-12 bg-gradient-to-b from-black my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-4xl p-4 text-center m-2">Sign In</h1>
        <input type="text" placeholder="Email" className="p-4 m-2 w-full text-black bg-gray-700"/>
        <input type="password" placeholder="Password" className="p-4 m-2 w-full text-black bg-gray-700"/>
        <button className="p-4 m-2 bg-red-700 w-full rounded-lg">Sign In</button> 
      </from>
    </div>
  );
};

export default Login;
