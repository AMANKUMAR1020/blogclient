// import { useLocation } from "react-router";
// import Header from "../../components/header/Header";
// import Posts from "../../components/posts/Posts";
// import Sidebar from "../../components/sidebar/Sidebar";
// import "./homepage.css";

// export default function Homepage() {
//   const location = useLocation();
//   console.log(location);
//   return (
//     <>
//       <Header />
//       <div className="home">
//         <Posts />
//         <Sidebar />
//       </div>
//     </>
//   );
// }








// //import { useLocation } from "react-router";
// import Header from "../../components/header/Header";
// import Posts from "../../components/posts/Posts";
// import Sidebar from "../../components/sidebar/Sidebar";
// import "./homepage.css";
// import { useEffect, useState } from "react";
// import axios from 'axios';

// export default function Homepage() {
//   const [posts,setPosts] = useState([]);

// useEffect(()=>{
//   const fetchPosts = async()=>{
//     const result = await axios.get("/post")
//     setPosts(result)
//     console.log(setPosts)
//   }
//   fetchPosts();
// },[])

// //const api =  axios.create({baseURL: 'http://localhost:5000/api/'})

// return (
//     <>
//         <Header/>
//       <div className="home">
//         <Posts/>
//         <Sidebar/>
//       </div>
//     </>
//   );
// }









// import { useLocation } from "react-router";
// import Header from "../../components/header/Header";
// import Posts from "../../components/posts/Posts";
// import Sidebar from "../../components/sidebar/Sidebar";
// import "./homepage.css";
// import { useEffect, useState } from "react";
// import axios from 'axios';

// export default function Homepage() {
  
//   const [posts,setPosts] = useState([]);
// //  const location = useLocation();
 
// const {search} = useLocation();
//   console.log(search)

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const result = await axios.get('/post'+search);
//         setPosts(result.data);
//         console.log(result.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchPosts();
//   }, [search]);

//   return (
//     <>
//         <Header/>
//       <div className="home">
//         <Posts posts={posts}/>
//         <Sidebar/>
//       </div>
//     </>
//   );
// }









// import { useEffect, useState } from "react";
// import Header from "../../components/header/Header";
// import Posts from "../../components/posts/Posts";
// import Sidebar from "../../components/sidebar/Sidebar";
// import "./homepage.css";
// import axios from "axios";
// import { useLocation } from "react-router";

// export default function Home() {
//   const [posts, setPosts] = useState([]);
//   const { search } = useLocation();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = await axios.get("/post" + search);
//       setPosts(res.data);
//     };
//     fetchPosts();
//   }, [search]);
//   return (
//     <>
//       <Header />
//       <div className="home">
//         <Posts posts={posts} />
//         <Sidebar />
//       </div>
//     </>
//   );
// }






import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/post" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}