import { useParams } from "react-router-dom";
import useGet from './useGet';
import axios from "axios";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isLoading } = useGet('http://localhost:8000/blogs/' + id);

    const handleClick = () => {
        axios.delete('http://localhost:8000/blogs/' + id)
            .then(() => {
                alert('Blog deleted');
            })
    }

    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}

            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;