import { useEffect, useState } from "react";
import { getTopStories } from "./http";
import { Link } from "react-router-dom";
import './articlelisting.css';

export function ArticleListing() {
    const [posts, setPosts] = useState<Array<number>>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchData = () => {
        getTopStories().then(response => {
            return response;
        })
        .then(data => {
            console.log(data);
            setPosts(data.slice(0, 20));
        })
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    if (isLoading && !posts) {
        return (
            <div className="wrapper">
                <p>Still loading data...</p>
            </div>
        )
    }

    return (
        <div className="wrapper">
                <h1>Top 20 items</h1>
            {
                posts?.map((item, index) => (
                    <div className="link" key={index}>
                        <Link to={`/article/${item}`}>{item}</Link>
                    </div>
                ))
            }
        </div>
    )
}