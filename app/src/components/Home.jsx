import BlogList from "./BlogList";
import useFetch from "./useFetch"

const Home = () => {

    const {data: blogs, isLoading, Error} = useFetch("http://localhost:8000/blogs")

    return (
        <div className="home">
            <center>
                {Error && <div>{Error}</div>}
                {isLoading && <div>Loading...</div>}
                {/* Only runs if blogs isn't null */}
                {blogs && <BlogList 
                blogs={blogs} />}
            </center>
        </div>
    );
}

export default Home;