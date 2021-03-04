import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { error, isLoading, data: blog } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}:</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>DELETE</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
