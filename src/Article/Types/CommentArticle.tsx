import { storyResponse } from "../../http";
import { Link } from "react-router-dom";

export function CommentArticle(props: {article: storyResponse}) {
    let article = props.article;
    return (
        <>
            <p className='title'>{article.title}</p>
            <p>Comment by: {article.by}</p>
            <p>id: {article.id}</p>
            <p className="comment">{article.text}</p>
            <button className="btn">
                <Link to={`/`}>Home</Link>
            </button>
        </>
    );
}