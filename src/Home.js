import BlogList from "./BlogList";
import useGet from "./useGet";

const Home = () => {
    const {data: blogs, isLoading, error} = useGet("http://localhost:8000/blogs");

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}
 
export default Home;