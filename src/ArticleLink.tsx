import { BrowserRouter, Link } from "react-router-dom";

export function ArticleLink(props: any) {
    let id = props.id;

    return (
        <div>
            <Link to={`/article/${id}`}>{id}</Link>
        </div>
    )
}