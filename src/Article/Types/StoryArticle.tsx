import { storyResponse } from "../../http";
import { Link } from "react-router-dom";

export function StroyArticle(props: {article: storyResponse}) {
    let article = props.article;
    let date = new Date(article.time * 1000);
    return (
        <>
            <p className="title">{article.title}</p>
            <p>Linked by: {article.by}</p>
            <p>id: {article.id}</p>
            <p>date: {date.toLocaleString('fi-FI')}</p>
            <a href={article.url} target="_blank">Link to article</a>
            <button className="btn">
                <Link to={`/`}>Home</Link>
            </button>
        </>
    );
}