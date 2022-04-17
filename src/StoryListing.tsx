import { useEffect, useState } from "react";
import { getStories, StoryResponse} from "./http";
import { Link } from "react-router-dom";
import './styles/storylisting.css';

export function StoryListing() {
    const [stories, setStories] = useState<Array<StoryResponse>>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchData = async () => {
        const stories = await getStories();     
        setStories(stories);
        setIsLoading(false);
    };
    
    useEffect(() => {
        fetchData();
    }, []);

    const loading = () => {
        return (
            <div className="wrapper">
                <p>Still loading data...</p>
            </div>
        )
    };

    const view = () => {
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
    };

    return isLoading && !stories ? loading() : view();

};
