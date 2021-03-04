//******************************** Custom Hooks **************************

//we use custom hooks in order to reuse code we write. They are similar to props in a
//way that you can transfer code/information to different components. However, the way
//we do this is slightly different.
import BlogList from "./BlogList";
//the same way useState/useEffect hooks have their own functionality, our custom hook has
//one too. It is custom and in this case, it's to fetch data and run load/error messages.
//import our useFetch file where all our loading/error/data functions are placed.
import useFetch from "./useFetch";

const Home = () => {
  //how we call our custom hook.                    here we place our API endpoint
  const { error, isLoading, data: blogs } = useFetch(
    "http://localhost:8000/blogs"
  );
  //we can now assign blogs to data
  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div> /* we could also just place 'data' above instead of assigning blogs to data
                                              either option doesn't really matter*/
  );
};

export default Home;
