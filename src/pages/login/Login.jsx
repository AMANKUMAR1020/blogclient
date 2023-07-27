// import "./login.css";

// export default function Login() {
//   return (
//     <div className="login">
//       <span className="loginTitle">Login</span>
//       <form className="loginForm">
//         <label>Email</label>
//         <input className="loginInput" type="text" placeholder="Enter your email..." />
//         <label>Password</label>
//         <input className="loginInput" type="password" placeholder="Enter your password..." />
//         <button className="loginButton">Login</button>
//       </form>
//         <button className="loginRegisterButton">Register</button>
//     </div>
//   );
// }











// import axios from "axios";
// import { useContext, useRef } from "react";
// import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";
// import "./login.css";

// export default function Login() {
//   const userRef = useRef();
//   const passwordRef = useRef();
//   const { dispatch, isFetching } = useContext(Context);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch({ type: "LOGIN_START" });
//     try {
//       const res = await axios.post("/auth/login", {
//         username: userRef.current.value,
//         password: passwordRef.current.value,
//       });
//       console.log(res.data);
//       dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
//     } catch (err) {
//       dispatch({ type: "LOGIN_FAILURE" });
//     }
//   };

//   console.log(dispatch);

//   return (
//     <div className="login">
//       <span className="loginTitle">Login</span>
//       <form className="loginForm" onSubmit={handleSubmit}>
//         <label>Username</label>
//         <input
//           type="text"
//           className="loginInput"
//           placeholder="Enter your username..."
//           ref={userRef}
//         />
//         <label>Password</label>
//         <input
//           type="password"
//           className="loginInput"
//           placeholder="Enter your password..."
//           ref={passwordRef}
//         />
//         <button className="loginButton" type="submit" disabled={isFetching}>
//           Login
//         </button>
//       </form>
//       <button className="loginRegisterButton">
//         <Link className="link" to="/register">
//           Register
//         </Link>
//       </button>
//     </div>
//   );
// }









// import axios from "axios";
// import { useContext, useRef } from "react";
// import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";
// import "./login.css";

// export default function Login() {
//   const userRef = useRef();
//   const passwordRef = useRef();
//   const { user,dispatch, isFetching } = useContext(Context);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch({ type: "LOGIN_START" });
//     try {
//       const res = await axios.post("/auth/login", {
//         username: userRef.current.value,
//         password: passwordRef.current.value,
//       });
//       dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
//     } catch (err) {
//       dispatch({ type: "LOGIN_FAILURE" });
//     }
//   };

//   console.log(user);

//   return (
//     <div className="login">
//       <span className="loginTitle">Login</span>
//       <form className="loginForm" onSubmit={handleSubmit}>
//         <label>Username</label>
//         <input
//           type="text"
//           className="loginInput"
//           placeholder="Enter your username..."
//           ref={userRef}
//         />
//         <label>Password</label>
//         <input
//           type="password"
//           className="loginInput"
//           placeholder="Enter your password..."
//           ref={passwordRef}
//         />
//         <button className="loginButton" type="submit" disabled={isFetching}>
//           Login
//         </button>
//       </form>
//       <button className="loginRegisterButton">
//         <Link className="link" to="/register">
//           Register
//         </Link>
//       </button>
//     </div>
//   );
// }












// import axios from "axios";
// import { useContext, useRef } from "react";
// import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";
// import "./login.css";

// export default function Login() {
//   const userRef = useRef();
//   const passwordRef = useRef();
//   const { user,dispatch, isFetching } = useContext(Context);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch({ type: "LOGIN_START" });
//     try {
//       const res = await axios.post("/auth/login", {
//         username: userRef.current.value,
//         password: passwordRef.current.value,
//       });
      
//       console.log(res.data);

//       dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
//     } catch (err) {
//       dispatch({ type: "LOGIN_FAILURE" });
//     }
//   };

//   console.log(user);

//   return (
//     <div className="login">
//       <span className="loginTitle">Login</span>
//       <form className="loginForm" onSubmit={handleSubmit}>
//         <label>Username</label>
//         <input
//           type="text"
//           className="loginInput"
//           placeholder="Enter your username..."
//           ref={userRef}
//         />
//         <label>Password</label>
//         <input
//           type="password"
//           className="loginInput"
//           placeholder="Enter your password..."
//           ref={passwordRef}
//         />
//         <button className="loginButton" type="submit" disabled={isFetching}>
//           Login
//         </button>
//       </form>
//       <button className="loginRegisterButton">
//         <Link className="link" to="/register">
//           Register
//         </Link>
//       </button>
//     </div>
//   );
// }









import axios from "axios";
//import { useContext, useRef } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
//import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
//  const { user,dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      
      console.log(res.data);
    } catch (err) {console.log(err)}
  };

 // console.log(user);

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={handleSubmit}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
