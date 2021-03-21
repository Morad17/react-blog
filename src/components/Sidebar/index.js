import React, {useState, useEffect} from 'react'
import { NavLink} from 'react-router-dom'
import Card from '../Ui/Card'
import './style.css'
import blogPost from '../../data/blog.json';
/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const [posts,setPosts] = useState([])
  ;
    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);

    
  return(
    <div className="sidebarContainer">
      <Card style={{ marginBottom:'20px', padding:'10px', boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileImage">
          <img src="/images/profile-img.png" alt=""/>
        </div>
        <div className="cardBody center">
          <p>Morad El Bouchikhi Senior Developer</p>
        </div>
      </Card>
      <Card>
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Card>
      <Card>
        <div className="cardHeader">
          <span>Recent posts</span>
        </div>

        <div className="recentPosts">

          {
            posts.map(post => {
              return(
                <NavLink key={post.id} to={`/post/${post.slug}`}>
                <div className="recentPosts">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
                </NavLink>
                    );
            })
          }
        </div>
      </Card>
    </div>


      
    )
  }


export default Sidebar