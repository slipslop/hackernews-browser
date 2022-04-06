import { storyResponse } from "../../http";

export function CommentArticle(props: {article: storyResponse}) {
    let article = props.article;
    return (
        <>
            <p>{article.title}</p>
            <p>{article.by}</p>
            <p>{article.id}</p>
            <p>{article.text}</p>
        </>
    );
}