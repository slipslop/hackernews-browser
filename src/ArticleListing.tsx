import { useEffect, useState } from "react";
import { getTopStories } from "./http";
import { Link } from "react-router-dom";

export function ArticleListing() {
    const [posts, setPosts] = useState<Array<number>>();
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

    return (
        <div>
            {
                posts?.map((item, index) => (
                    <div>
                        <Link to={`/article/${item}`}>{item}</Link>
                    </div>
                ))
            }
        </div>
    )
}