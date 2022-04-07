import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStory } from "../http";
import { storyResponse } from "../http";
import { Comment } from "./Types/Comment";
import { Story as StoryStory } from "./Types/Story";
import "../styles/story.css";

export function Story(props: any) {
    let {id} = useParams();

    const [story, setStory] = useState<storyResponse>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchData = () => {
        getStory(id).then(response => {
            return response;
        })
        .then(data => {
            setStory(data);
            setIsLoading(false);
        });
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (story && !isLoading) {
        if (story.type === 'comment') {
            return <Comment story={story}/>
        } else {
            return <StoryStory story={story} />
        }
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
            <p>Loading data...</p>
        </>
    );
}