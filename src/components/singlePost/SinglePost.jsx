// import { Link } from "react-router-dom";
// import "./singlepost.css";

// export default function SinglePost() {
//   return (
//     <div className="singlePost">
//       <div className="singlePostWrapper">
//         <img
//           className="singlePostImg"
//           src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//           alt=""
//         />
//         <h1 className="singlePostTitle">
//           Lorem ipsum dolor
//           <div className="singlePostEdit">
//             <i className="singlePostIcon far fa-edit"></i>
//             <i className="singlePostIcon far fa-trash-alt"></i>
//           </div>
//         </h1>
//         <div className="singlePostInfo">
//           <span>
//             Author:
//             <b className="singlePostAuthor">
//               <Link className="link" to="/posts?username=Safak">
//                 Safak
//               </Link>
//             </b>
//           </span>
//           <span>1 day ago</span>
//         </div>
//         <p className="singlePostDesc">
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
//           quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
//           Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
//           eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
//           error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
//           impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
//           odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
//           iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
//           a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
//           iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
//           a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
//           iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
//           a odit modi eos!
//           <br />
//           <br />
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
//           quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
//           Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
//           eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
//           error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
//           impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
//           odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
//           elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
//           iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
//           a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
//         </p>
//       </div>
//     </div>
//   );
// }










import { useLocation,Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import "./singlepost.css";

export default function SinglePost() {
  const location = useLocation()

  console.log(location.pathname.split("/")[2])
  const path = location.pathname.split("/")[2]

   const [post, setPost] = useState({});
   const [title, setTitle] = useState("");
   const [desc, setDesc] = useState("");
  // const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/post/" + path);
      console.log(res.data)
       setPost(res.data);
       setTitle(res.data.title);
       setDesc(res.data.desc);
    };
    getPost();
  }, [path]);


  /*
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) {}
  };
  */

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            className="singlePostImg"
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
        <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
        {post.desc}</p>
      </div>
    </div>
  );
}