// import { Link } from "react-router-dom";
// import "./post.css";

// export default function Post() {
//   return (
//     <div className="post">
//       <img
//         className="postImg"
//         src="https://www.bing.com/images/search?view=detailV2&ccid=fzSnClvu&id=0A464DC0E56E6C50AD35FD88A3A38594EA481221&thid=OIP.fzSnClvueUiDCZNJINMWywHaEK&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.7f34a70a5bee79488309934920d316cb%3frik%3dIRJI6pSFo6OI%252fQ%26riu%3dhttp%253a%252f%252fallpicts.in%252fwp-content%252fuploads%252f2018%252f03%252fNatural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg%26ehk%3dJPI0MFI04N62Xtd7MT1P2sw4vJgwODLsp1EcpgvuGFo%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=images&simid=608026477538261885&FORM=IRPRST&ck=C74D0AC5161DC374F37027F6D99057C1&selectedIndex=1&ajaxhist=0&ajaxserp=0.jpg"
//         alt=""
//       />
//       <div className="postInfo">
//         <div className="postCats">
//           <span className="postCat">
//             <Link className="link" to="/posts?cat=Music">
//               Music
//             </Link>
//           </span>
//           <span className="postCat">
//             <Link className="link" to="/posts?cat=Music">
//               Life
//             </Link>
//           </span>
//         </div>
//         <span className="postTitle">
//           <Link to="/post/abc" className="link">
//             Lorem ipsum dolor sit amet
//           </Link>
//         </span>
//         <hr />
//         <span className="postDate">1 hour ago</span>
//       </div>
//       <p className="postDesc">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
//         officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
//         fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
//         atque, exercitationem quibusdam, reiciendis odio laboriosam?
//       </p>
//     </div>
//   );
// }






// import { Link } from "react-router-dom";
// import "./post.css";

// export default function Post({post}) {

//   return (
//     <div className="post">
//       <img className="postImg"
//      src="https://www.bing.com/images/search?view=detailV2&ccid=fzSnClvu&id=0A464DC0E56E6C50AD35FD88A3A38594EA481221&thid=OIP.fzSnClvueUiDCZNJINMWywHaEK&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.7f34a70a5bee79488309934920d316cb%3frik%3dIRJI6pSFo6OI%252fQ%26riu%3dhttp%253a%252f%252fallpicts.in%252fwp-content%252fuploads%252f2018%252f03%252fNatural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg%26ehk%3dJPI0MFI04N62Xtd7MT1P2sw4vJgwODLsp1EcpgvuGFo%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=images&simid=608026477538261885&FORM=IRPRST&ck=C74D0AC5161DC374F37027F6D99057C1&selectedIndex=1&ajaxhist=0&ajaxserp=0.jpg"
//       alt=""
//       />
//       <div className="postInfo">
//         <div className="postCats">
//           <span className="postCat">Music </span>
//           <span className="postCat">Life </span>
//         </div>

//         <span className="postTitle">{post.title}</span>
//         <hr/>
//         <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
//       </div>
//       <p className="postDesc">{post.desc}</p>
//     </div>
//   );
// }









import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}