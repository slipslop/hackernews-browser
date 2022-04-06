import { useEffect, useState } from "react";
import { Article } from "./Article";
import { getTopStories } from "./http";

export function ArticleListing() {
    const [posts, setPosts] = useState(Array<number>());
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
                posts.map((item, index) => (
                    <Article key={index} id={item}/>
                ))
            }
        </div>
    )
}