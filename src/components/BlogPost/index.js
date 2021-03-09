import React from 'react'
import './style.css'
import Card from '../Ui/Card/index.js'

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
  return(
        <div className="blogPostContainer">
          <Card>
            <div className="blogHeader">
            <span className="blogCategory">Featured</span>
            <h1 className="postTitle">All about Beauty-full blogs!</h1>
            <span>posted on March 3rd 2020</span>
            </div>
            <div className="postImageContainer">
              <img alt="post image" src="/images/blog.jpg" />
            </div>

          </Card>
        </div>
   )
  }


export default BlogPost