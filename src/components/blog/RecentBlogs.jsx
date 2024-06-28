import "./blog.css";
import { recentPosts } from '../../constants/BlogPosts'
import Button from '../genericButton/genButton';

const RecentBlogs = () => {
  return (
    <section className="recentBlogs">
        <div className="recentBlogs-header">
            <h3>Recent Blog Posts</h3>
            <h1>Latest Updates</h1>
        </div>
        <div className="recentBlogs-card-wrapper">
            {recentPosts.map((post, index) => {
                return(
                    <div className="recent-blog-card-item" key={index}>
                            <h3>{post.category}</h3>
                            <h1>{post.title}</h1>
                            <img src={post.image} alt={post.title} />
                            <div className="post-image-info">
                                <h4>
                                    <i className="fa fa-tags"></i>&nbsp;
                                    Post by Admin
                                </h4>
                                <p><i className="far fa-calendar"></i>&nbsp;{post.date}</p>
                            </div>
                            <p>{post.description}</p>
                            <Button text={'Read More'} width={'200px'} showArrow={true}/>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default RecentBlogs
