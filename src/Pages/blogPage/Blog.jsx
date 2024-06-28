import { blogPosts } from "../../constants/BlogPosts"
import './Blog.css'
import Button from '../../components/genericButton/genButton'

const Blog = () => {
  return (
    <section className="blog">
      <div className="blog-cards-wrapper">
        {blogPosts.map((blog, index) => {
          return(
            <div className="blog-card-singel" key={index}>

              <div className="blog-card-left">
                <div className="new-date">
                  <p>{blog.date}</p>
                  <p>By Admin <i className="fa fa-tags"></i></p>
                </div>
                <div className="blog-card-gist">
                  <a href="#"><h1>{blog.title}</h1></a>
                  <p>{blog.description}</p>
                </div>
                <div className="blog-card-buttons">
                  <Button text={'Read More'} width={'200px'} showArrow={true}/>
                </div>
              </div>

              <div className="blog-card-right">
                <img src={blog.image} alt="" />
                <div className="blog-image-shadow">
                  <a href="#"><i className="fa fa-link"></i>Read More</a>
                  <a href="#"><i className="fa fa-share"></i>Share</a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Blog
