import Button from "./Button.jsx";

export default function PostCard({ post }) {
    return (
        <div className="col my-3">
            <div className="card">
                <img src="/assets/blog-image.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                    <Button href={`#post:${post.id}`} variant="primary">Voir l'article</Button>
                </div>
            </div>
        </div>
    );
}