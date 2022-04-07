import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getStory } from "../http";
import { storyResponse } from "../http";
import "../styles/story.css";

export function Story(props: any) {
    let {id} = useParams();

    const [story, setStory] = useState<storyResponse>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchData = async () => {
        await getStory(id)
            .then(res => {
                setStory(res);
                setIsLoading(false);
            });
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (story && !isLoading) {
        let date = new Date(story.time * 1000);
        return (
            <>
                <p className="title">{story.title}</p>
                <p>Linked by: {story.by}</p>
                <p>id: {story.id}</p>
                <p>points: {story.score}</p>
                <p>date: {date.toLocaleString('fi-FI')}</p>
                <a href={story.url} target="_blank" rel="noreferrer">Link to story</a>
                <button className="btn">
                    <Link to={`/`}>Home</Link>
                </button>
            </>
        );
    }
    
    if (!story && !isLoading) {
        return (
            <>
                <p>Story not found!</p>
            </>
        );
    }

    return (
        <>
            <p>Still loading data...</p>
        </>
    );
}