import { useState } from "react";
import Button from "../../components/Button.jsx";
import Input from "../../components/Input.jsx";
import Modal from "../../components/Modal.jsx";
import Spinner from "../../components/Spinner.jsx";
import { Alert } from "../../components/Alerts.jsx";

export default function EditPostModal({post, onClose, onSave}) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null)
        setLoading(true)
        const data = new FormData(e.target)
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: 'PUT',
            body: data
        })
        .then((r) => r.json())
        .then((r) => {
            onSave(Object.fromEntries(data.entries()))
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));            
    }

    return (
        <Modal onClose={onClose}>
            <h2 className="text-center">Modifier l'article</h2>

            {loading && 
                <div className="d-grid justify-content-center mt-2">
                    <Spinner />
                </div>
            }

            {error &&
                <div className="d-grid justify-content-center mt-2">
                    <Alert type='danger'>{error.toString()}</Alert>
                </div>
            }

            <form action="" onSubmit={handleSubmit} className="d-grid vstack gap-3">
                <Input name="title" label="Titre" type="text" defaultValue={post.title} />
                <Input name="body" label="Contenu de l'article" type="textarea" defaultValue={post.body} rows="4" />
                <div className="d-flex gap-2 justify-content-end">
                    <Button disabled={loading} type="button" variant="secondary" onClick={onClose}>Annuler</Button>
                    <Button disabled={loading} type="submit" variant="primary">Sauvegarder</Button>
                </div>
            </form>
        </Modal>
    );
}