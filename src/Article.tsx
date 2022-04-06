import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getStory } from "./http";
import { storyResponse } from "./http";

export function Article(props: any) {
    let {id} = useParams();

    const [article, setArticle] = useState<storyResponse>();

    const fetchData = () => {
        getStory(id).then(response => {
            return response;
        })
        .then(data => {
            console.log(data);
            setArticle(data);
        });
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <p>{article?.by}</p>
        </>
    );
}