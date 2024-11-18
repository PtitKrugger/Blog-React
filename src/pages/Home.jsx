import useDocumentTitle from "../hooks/useDocumentTitle.js";
import useFetch from "../hooks/useFetch.js";
import PostCard from "../components/PostCard.jsx";
import Spinner from "../components/Spinner.jsx";
import { Alert } from "../components/Alerts.jsx";

export default function Home() {
    useDocumentTitle('Home');
    const { loading, data, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10');

    return (
        <>
            <div className="d-flex flex-column flex-nowrap vh-100">
                <div className="d-flex align-items-center justify-content-center mt-2">
                    <h4 className="mb-0">Liste des posts</h4>
                </div>

                <div className="d-grid justify-content-center mt-2">
                    {loading && <Spinner />}
                    {error && <Alert type='danger'>{error.toString()}</Alert>}
                </div>

                <div className="d-flex align-items-center justify-content-center">
                    <div className="row row-cols-3 w-75">
                        {data && data.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}