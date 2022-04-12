import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStory } from "./http";
import { StoryResponse } from "./http";
import "./styles/story.css";

export function Story() {
    let {id} = useParams();

    const [story, setStory] = useState<StoryResponse>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchData = async () => {
        const story = await getStory(id);
        setStory(story);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData()
    }, []);

    const goToHome = () => {
        window.location.replace('/');
    }

    if (story && !isLoading) {
        let date = new Date(story.time * 1000);
        return (
            <div className="story-wrapper">
                <p className="title">{story.title}</p>
                <p>Linked by: {story.by}</p>
                <p>id: {story.id}</p>
                <p>points: {story.score}</p>
                <p>date: {date.toLocaleString('fi-FI')}</p>
                <a href={story.url} target="_blank" rel="noreferrer">Link to story</a>
                <button
                    className="btn"
                    onClick={() => goToHome()}
                >
                    Home
                </button>
            </div>
        );
    }

    return !story && !isLoading
        ? <p>Story not found!</p>
        : <p>Still loading data...</p>;
}