// // import { useLocation } from "react-router";
// import Header from "../../components/header/Header";
// // import Posts from "../../components/posts/Posts";
// // import Sidebar from "../../components/sidebar/Sidebar";
// import "./homepage.css";

// export default function Homepage() {
//   // const location = useLocation();
//   // console.log(location);
//    return (
//     <>
//       <Header />
//       <div className="home">
//         <Header/>
//         Home
//         {/* <Posts />
//         <Sidebar /> */}
//       </div>
//     </>
//   );
// }








// import { useLocation } from "react-router";
import Header from "../../components/header/Header";
// import Posts from "../../components/posts/Posts";
// import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";

export default function Homepage() {
   return (
    <>
      <div className="home">
        <Header/>
        Home
      </div>
    </>
  );
}