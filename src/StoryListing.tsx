import { useEffect, useState } from "react";
import { getTopStories } from "./http";
import { Link } from "react-router-dom";
import './styles/storylisting.css';

export function StoryListing() {
    const [stories, setStories] = useState<Array<number>>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchData = () => {
        getTopStories().then(response => {
            return response;
        })
        .then(data => {
            setStories(data.slice(0, 20));
            setIsLoading(false);
        })
    }
    
    useEffect(() => {
        fetchData()
    }, [])

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
                        <Link to={`/story/${item}`}>{item}</Link>
                    </div>
                ))
            }
        </div>
    )
}