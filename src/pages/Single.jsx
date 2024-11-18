import { useRef, useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle.js";
import useFetch from "../hooks/useFetch.js";
import Spinner from "../components/Spinner.jsx";
import Button from "../components/Button.jsx";
import { Alert } from "../components/Alerts.jsx";
import Input from "../components/Input.jsx";
import Modal from "../components/Modal.jsx";
import EditPostModal from "./Single/EditPostModal.jsx";

export default function Single({ postId }) {
    const { loading, data: post, error, setData } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {});
    useDocumentTitle(post?.title)

    const [editing, setEditing] = useState(false);

    if (loading) {
        return (
            <div className="d-grid justify-content-center mt-2">
                <Spinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className="d-grid justify-content-center mt-2">
                <Alert type='danger'>{error.toString()}</Alert>
            </div>
        );
    }

    const handleSave = (data) => {
        setData({
            ...post,
            ...data
        })
        setEditing(false);
    }

    return (
        <>
            {post &&
                <div className="container border p-4 mt-3 rounded shadow-sm">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <Button variant="primary" onClick={() => setEditing(true)}>Modifier</Button>
                </div>
            }
            {editing && 
                <EditPostModal post={post} onClose={() => setEditing(false)} onSave={handleSave} />
            }
        </>
    );
}