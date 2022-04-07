import { useEffect, useState } from "react";
import { getTopStories, getStory, storyResponse } from "./http";
import { Link } from "react-router-dom";
import './styles/storylisting.css';

export function StoryListing() {
    const [stories, setStories] = useState<Array<storyResponse>>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchData = async () => {
        await getTopStories()
            .then(res => {
                return res.slice(0,20);
            }).then(res => {
                let promises: Array<Promise<storyResponse>> = [];
                res.map((id) => {
                    let promise = getStory(id);
                    promises.push(promise);
                });
                Promise.all(promises)
                    .then(res => {
                        setStories(res);
                        setIsLoading(false);
                    });
            });
        
    };
    
    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading && !stories) {
        return (
            <div className="wrapper">
                <p>Still loading data...</p>
            </div>
        )
    }
    
    if (!isLoading && !stories) {
        return (
            <div className="wrapper">
                <p>Couldn't fetch stories</p>
            </div>
        )
    }

    return (
        <div className="wrapper">
                <h1>Top 20 stories</h1>
            {
                stories?.map((item, index) => (
                    <div className="link" key={index}>
                        <Link to={`/story/${item.id}`}>{item.title}</Link>
                        <div className="subtitle">
                            <div className="item">{item.by}</div>
                            <div className="item">{item.score} points</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}