import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isAdding, setIsAdding] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsAdding(true);

        axios.post("http://localhost:8000/blogs", blog)
            .then(() => {
                console.log("Blog Added");
                setIsAdding(false);
                history.push('/');
            })
    }

    return (
        <div className="create">
            <h2>Add A New Blog</h2>

            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog Body:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>

                {!isAdding && <button>Add Blog</button>}
                {isAdding && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;