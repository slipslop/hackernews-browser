import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStory } from "../http";
import { storyResponse } from "../http";
import { CommentArticle } from "./Types/CommentArticle";
import { StroyArticle } from "./Types/StoryArticle";
import "./article.css";

export function Article(props: any) {
    let {id} = useParams();

    const [article, setArticle] = useState<storyResponse>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchData = () => {
        getStory(id).then(response => {
            return response;
        })
        .then(data => {
            console.log(data);
            setArticle(data);
            setIsLoading(false);
        });
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (article && !isLoading) {
        if (article.type === 'comment') {
            return <CommentArticle article={article}/>
        } else {
            return <StroyArticle article={article} />
        }
    }
    
    if (!article && !isLoading) {
        return (
            <>
                <p>Article not found!</p>
            </>
        );
    }

    return (
        <>
            <p>Loading data...</p>
        </>
    );
}