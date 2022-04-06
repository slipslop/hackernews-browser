import { storyResponse } from "../../http";

export function StroyArticle(props: {article: storyResponse}) {
    let article = props.article;
    return (
        <>
            <p>{article.title}</p>
            <p>{article.by}</p>
            <p>{article.id}</p>
            <p>{article.url}</p>
        </>
    );
}