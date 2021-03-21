import React, {useState, useEffect} from 'react'
import './style.css'
import Card from '../Ui/Card/index.js'
import blogPost from '../../data/blog.json'

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

    const [post, setPost] = useState({
      id: "",
      blogCategory:"",
      blogTitle:"",
      postedOn:"",
      author:"",
      blogImage:"",
      blogText:"",
    });
    const [slug, setSlug] = useState('');


    useEffect(() => {
      const slug = props.match.params.slug;
      const post = blogPost.data.find(post => post.slug == slug);
      setPost(post);
      setSlug(slug)
    }, [post, props.match.params.slug]);

  return(
        <div className="blogPostContainer">
          <Card>
            
            <div className="blogHeader">
            <span className="blogCategory">{post.blogCategory}</span>
            <h1 className="postTitle">{post.blogTitle}</h1>
            <span>posted on {post.postedOn} by {post.author}</span>
            </div>
            <div className="postImageContainer">
              <img alt="post image" src="/images/blog.jpg" />
            </div>

          </Card>
        </div>
   )
  }


export default BlogPost