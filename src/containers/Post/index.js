import React from 'react'
import './style.css'
import Card from '../../components/Ui/Card/index.js'
import BlogPost from '../../components/BlogPost/index.js'
import Sidebar from '../../components/Sidebar/index.js'
/**
* @author
* @function Post
**/

const Post = (props) => {

  return(
    <section className="container">
        <BlogPost {...props} />
        <Sidebar />
    </section>
   )
  }


export default Post